import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';



@Component({
  selector: 'edit-post',
  templateUrl: './templates/edit-post.component.html', 
  styleUrls: ['./css/edit-post.component.css'],
})



export class EditPostComponent {
  form = {
    title: '',
    text: '',
  };
  post:Post = {
    title: '',
    text: '',
    userId: '',
    createdAt: '',
    isShielded: false
  };

  constructor(
    private _notificationsService: NotificationsService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ){}


  ngOnInit(): void{
    this.getPostDetail(this.route.snapshot.params['id']);
  }

  getPostDetail(id){
    this.http.get<Post>('/api/post/'+id).subscribe(data => {
      this.post = data;
      this.form.title = data.title;
      this.form.text = data.text;
      console.log(data);
    });
  }

  goBack(): void {
    this.location.back();
  }

  editPost(): void{
    this.http.put('/api/post/'+this.route.snapshot.params['id'], this.form).subscribe();
    this._notificationsService.info(
      '成功修改博客',
      '请到文章详情页查看~',
      {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
      });
    this.location.back();
  }
}
