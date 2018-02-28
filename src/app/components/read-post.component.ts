import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

import { Comment } from '../models/comment';
import { Post } from '../models/post';

@Component({
  selector: 'read-post',
  templateUrl: './templates/read-post.component.html', 
  styleUrls: ['./css/read-post.component.css'],
})

export class ReadPostComponent implements OnInit {
  post: Post;
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
    private router: Router,
    private _notificationsService: NotificationsService
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
    this.http.get<Post>('/api/post/'+id).subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

  goBack(): void {
    this.location.back();
  }

  addComment(): void{
    this.http.post<Comment>('/api/comment', this.form).subscribe(res => {
      if(res){
        this.http.get<Comment[]>('/api/comments/'+this.form.postId)
        .subscribe(data => {
          console.log(data);
          this.comments = data;
        })
        this.form.content = '';
        this._notificationsService.info(
          '评论成功',
          '注意客观评论哦~',
          {
              timeOut: 2000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
          });
      }else{
        this._notificationsService.alert(
          '发生意外错误~',
          '评论失败',
          {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
          });
      }
      
    });
  }

  deleteComment(commentId: string): void{
    this.http.delete('/api/comment/'+commentId).subscribe();
    this._notificationsService.info(
      '删除评论成功',
      '删除评论后无法恢复，请留意~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
      });
    this.http.get<Comment[]>('/api/comments/'+this.form.postId)
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      })
  }


}
