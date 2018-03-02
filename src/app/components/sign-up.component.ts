import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';


interface resultMsg {
  msg: string;
}


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
    private router: Router,
    private _notificationsService: NotificationsService
  ){}

  ngOnInit(): void{
  }

  createUser(){
    this.http.post<resultMsg>('/api/createUser', this.newUser)
      .subscribe(res => {
        if(res.msg == 'success'){
          this._notificationsService.success(
            '注册成功',
            '请登录~~~',
            {
                timeOut: 2000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
          this.router.navigate(['/signin']);
        }else if(res.msg == 'duplicate'){
          this._notificationsService.error(
            '注册失败',
            '用户名重复，请重新输入',
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
        }else{
          this._notificationsService.error(
            '注册失败',
            res.msg,
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
            });
        } 
        
      }, (err) => {
      })
  }

}
