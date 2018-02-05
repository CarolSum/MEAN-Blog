import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './templates/sign-in.component.html', 
})

export class SignInComponent implements OnInit {
  
  loginUser = {};

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void{
  }

  login(){
    this.http.post('/api/login', this.loginUser)
      .subscribe(res => {
        console.log(res);
        if(res != false && res != null){
          //登录成功
          this.authService.setObject('user',res);
          this.authService.set('isLogin', 'true');
          console.log(this.authService.get('isLogin'));
          //this.router.navigate(['/']);
          window.location.href = '/';
        } else{
          //登录失败
        }
        
      }, (err) => {
        console.log(err);
      })
  }
}
