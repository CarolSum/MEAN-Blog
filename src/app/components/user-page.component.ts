import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';

import { AuthService } from '../services/auth.service';

import { Post } from '../models/post';


interface LengthResp {
  length: number;
}

@Component({
  selector: 'user-page',
  templateUrl: './templates/user-page.component.html', 
  styleUrls: ['./css/userpage.component.css'],
})

export class UserPageComponent implements OnInit{
  posts: Post[];
  curUser = {};
  target = {};
  totalNum = {
    length: 0
  };
  pageNumList = [];
  curPage = 0;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.getPostsByUserId(params['id'], params['page']);
    })
    
  }

  getPostsByUserId(id, page){
    this.curPage = page;
    this.http.get<Post[]>('/api/posts/'+id+'/'+page)
      .subscribe(data => {
        console.log(data);
        this.posts = data;
        this.posts.forEach(function(post, i){
          post.text = post.text.substr(0, 50) + '...';
        })
      });
    this.curUser = this.authService.getObject('user');
    this.http.get('/api/targetUser/'+id)
      .subscribe(data => {
        console.log(data);
        this.target = data;
      });

    this.pageNumList.length = 0;
    this.http.get<LengthResp>('/api/posts/'+id)
      .subscribe(data => {
        this.totalNum = data;
        for(var i = 0; i < this.totalNum.length / 2; i++){
          this.pageNumList.push(i+1);
        }
      });
  }

  goBack(){
    this.location.back();
  }
}
