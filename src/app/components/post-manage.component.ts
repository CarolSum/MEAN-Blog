import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

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
    private http: HttpClient,
    private _notificationsService: NotificationsService
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
    this._notificationsService.alert(
      '成功隐藏博客',
      '管理员大大辛苦啦~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: false
      });
  }

  Unshield(post){
    this.http.put('/api/post/'+post._id, {isShielded: false}).subscribe();
    post.isShielded = false;
    this._notificationsService.info(
      '取消隐藏博客',
      '文明上网~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: false
      });
  }
}
