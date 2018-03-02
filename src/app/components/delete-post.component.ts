import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';

@Component({
  selector: 'delete-post',
  templateUrl: './templates/delete-post.component.html', 
  styleUrls: ['./css/delete-post.component.css'],
})



export class DeletePostComponent implements OnInit {
  post: Post = {
    title: '',
    text: '',
    userId: '',
    createdAt: '',
    isShielded: false
  };
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private _notificationsService: NotificationsService
  ){}

  ngOnInit(): void{
    this.http.get<Post>('/api/post/'+this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
    });
  }

  home(): void {
    this.location.back();
  }

  deletePost(): void{
    this.http.delete('/api/post/'+this.route.snapshot.params['id']).subscribe();
    this.http.delete('/api/comments/'+this.route.snapshot.params['id']).subscribe();
    this._notificationsService.info(
      '成功删除博客',
      '删除的博客无法恢复哦~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
      });
    this.location.back();
  }
}
