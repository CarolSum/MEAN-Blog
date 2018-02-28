import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

import { Comment } from '../models/comment';

@Component({
  selector: 'manage-comment',
  templateUrl: './templates/comment-manage.component.html', 
  styleUrls: ['./css/comment-manage.component.css'],
})

export class CommentManageComponent implements OnInit{
  comments: Comment[];
  curUser: {};

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private _notificationsService: NotificationsService
  ){}

  ngOnInit(): void{
    this.http.get<Comment[]>('/api/comments').subscribe(data => {
      this.comments = data;
    });
    this.curUser = this.authService.getObject('user');
  }

  shield(comment){
    this.http.put('/api/comment/'+comment._id, {isShielded: true}).subscribe();
    comment.isShielded = true;
    this._notificationsService.alert(
      '成功隐藏评论',
      '管理员大大辛苦啦~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: false
      });
  }

  Unshield(comment){
    this.http.put('/api/comment/'+comment._id, {isShielded: false}).subscribe();
    comment.isShielded = false;
    this._notificationsService.info(
      '取消隐藏评论',
      '文明上网~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: false
      });
  }

  deleteComment(comment){
    this.http.delete('/api/comment/'+comment._id).subscribe();
    this._notificationsService.info(
      '删除评论成功',
      '坚决抵制恶意评论~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
      });
    this.http.get<Comment[]>('/api/comments').subscribe(data => {
      this.comments = data;
    });
  }
}
