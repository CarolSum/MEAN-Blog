import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../services/post.service';
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
    id: null,
    title: '',
    text: '',
    userId: '',
  };

  constructor(
    private postService: PostService,
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
    this.location.back();
  }
}
