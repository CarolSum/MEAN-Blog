import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

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
    private http: HttpClient
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
  }

  Unshield(comment){
    this.http.put('/api/comment/'+comment._id, {isShielded: false}).subscribe();
    comment.isShielded = false;
  }

  deleteComment(comment){
    this.http.delete('/api/comment/'+comment._id).subscribe();
    this.http.get<Comment[]>('/api/comments').subscribe(data => {
      this.comments = data;
    });
  }
}
