import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { Post } from '../models/post';

@Component({
  selector: 'add-post',
  templateUrl: './templates/add-post.component.html', 
})



export class AddPostComponent {
  form:Post = {
    id: null,
    title: '',
    text: '',
    userId: '',
  };

  constructor(
    private authService: AuthService,
    private location: Location,
    private http: HttpClient
  ){}

  submitPost(): void{
    this.http.post('/api/post', {
      title: this.form.title,
      text: this.form.text,
      userId: this.form.userId,
    }).subscribe();
    this.location.back();
  }

  ngOnInit(): void{
    this.form.userId = this.authService.getObject('user')._id;
  }
}
