import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

import { Post } from '../models/post';

@Component({
  selector: 'manage-post',
  templateUrl: './templates/post-manage.component.html', 
  styleUrls: ['./css/post-manage.component.css'],
})

export class PostManageComponent implements OnInit{
  posts: Post[];
  curUser: {};

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Post[]>('/api/posts').subscribe(data => {
      this.posts = data;
      this.posts.forEach(function(post, i){
        post.text = post.text.substr(0, 50) + '...';
      })
    });
    this.curUser = this.authService.getObject('user');
  }

  shield(post){
    this.http.put('/api/post/'+post._id, {isShielded: true}).subscribe();
    post.isShielded = true;
  }

  Unshield(post){
    this.http.put('/api/post/'+post._id, {isShielded: false}).subscribe();
    post.isShielded = false;
  }
}
