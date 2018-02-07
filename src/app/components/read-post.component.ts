import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { Comment } from '../models/comment';

@Component({
  selector: 'read-post',
  templateUrl: './templates/read-post.component.html', 
})

export class ReadPostComponent implements OnInit {
  post = {};
  form = {
    postId: '',
    content: '',
    userId: ''
  }
  curUser = {};
  comments: Comment[];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void{
    this.getPostDetail(this.route.snapshot.params['id']);
    this.form.postId = this.route.snapshot.params['id'];
    this.curUser = this.authService.getObject('user');
    if(this.curUser != {} ){
      this.form.userId = this.authService.getObject('user')._id;
    }
    this.http.get<Comment[]>('/api/comments/'+this.form.postId)
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      })
  }

  getPostDetail(id){
    this.http.get('/api/post/'+id).subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

  goBack(): void {
    this.location.back();
  }

  addComment(): void{
    this.http.post<Comment>('/api/comment', this.form).subscribe(res => {
      console.log(res);
      this.http.get<Comment[]>('/api/comments/'+this.form.postId)
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      })
      this.form.content = '';
    });
  }

  deleteComment(commentId: string): void{
    this.http.delete('/api/comment/'+commentId).subscribe();
    this.http.get<Comment[]>('/api/comments/'+this.form.postId)
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      })
  }


}
