import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';

import { AuthService } from '../services/auth.service';

import { Post } from '../models/post';

@Component({
  selector: 'user-page',
  templateUrl: './templates/user-page.component.html', 
})

export class UserPageComponent implements OnInit{
  posts: Post[];
  curUser = {};

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ){}

  ngOnInit(): void{
    this.getPostsByUserId(this.route.snapshot.params['id']);
  }

  getPostsByUserId(id){
    this.http.get<Post[]>('/api/posts/'+id)
      .subscribe(data => {
        console.log(data);
        this.posts = data;
        this.posts.forEach(function(post, i){
          post.text = post.text.substr(0, 50) + '...';
        })
      });
    this.curUser = this.authService.getObject('user');
  }

  goBack(){
    this.location.back();
  }
}
