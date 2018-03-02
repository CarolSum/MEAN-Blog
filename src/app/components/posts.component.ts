import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';

import { Post } from '../models/post';

interface PostsResponse{
  posts: Post[];
}


@Component({
  selector: 'all-posts',
  templateUrl: './templates/posts.component.html', 
  styleUrls: ['./css/posts.component.css'],
})

export class PostsComponent implements OnInit{
  posts: Post[];
  results: string[];
  isLogin: string;
  curUser: {};

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void{
    this.http.get<Post[]>('/api/posts').subscribe(data => {
      this.posts = data;
      this.posts.forEach(function(post, i){
        post.text = post.text.substr(0, 50) + '...';
      })
    });
    this.isLogin = this.authService.get('isLogin');
    this.curUser = this.authService.getObject('user');
  }

  gotoDetail(post){
    if(!post.isShielded)
      this.router.navigate(['/readPost', post._id]);
  }

}
