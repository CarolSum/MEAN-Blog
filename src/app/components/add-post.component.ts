import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Post } from '../models/post';

@Component({
  selector: 'add-post',
  templateUrl: './templates/add-post.component.html', 
  styleUrls: ['./css/add-post.component.css'],
})



export class AddPostComponent {
  form:Post = {
    title: '',
    text: '',
    userId: '',
    createdAt: '',
    isShielded: false
  };

  constructor(
    private authService: AuthService,
    private location: Location,
    private http: HttpClient,
    private _notificationsService: NotificationsService
  ){}

  submitPost(): void{
    this.http.post('/api/post', {
      title: this.form.title,
      text: this.form.text,
      userId: this.form.userId,
    }).subscribe();
    this._notificationsService.success(
      '发表成功',
      '请到博客主页或个人主页查看',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
      });
    this.location.back();
  }

  ngOnInit(): void{
    this.form.userId = this.authService.getObject('user')._id;
  }
}
