import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './templates/sign-up.component.html', 
  styleUrls: ['./css/signup.component.css'],
})

export class SignUpComponent implements OnInit {
  
  newUser = {};
  
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void{
  }

  createUser(){
    this.http.post('/api/createUser', this.newUser)
      .subscribe(res => {
        console.log(res);
        if(res != false) this.router.navigate(['/signin']);
        //消息通知
      }, (err) => {
        console.log(err);
      })
  }

}
