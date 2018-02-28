import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location }  from '@angular/common';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'sign-in',
  templateUrl: './templates/sign-in.component.html', 
  styleUrls: ['./css/signin.component.css'],
})

export class SignInComponent implements OnInit {
  
  loginUser = {};

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private _notificationsService: NotificationsService
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
          
          this._notificationsService.success(
            '登录成功',
            '欢迎回到我的博客',
            {
                timeOut: 2000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
          //this.router.navigate(['/']);
          window.location.href = '/';
        } else if(res == null){
          this._notificationsService.error(
            '登录失败',
            '用户不存在或者密码错误',
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
        }else{
          this._notificationsService.error(
            '登录失败',
            '请检验输入信息',
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
        }
        
      }, (err) => {
        console.log(err);
      })
  }
}
