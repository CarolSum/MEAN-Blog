import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  user = {};
  isLogin = false;

  checkIfLogin(){
    return this.isLogin;
  }

  clearUser(){
    this.user = {};
    this.isLogin = false;
  }

  saveUser(user){
    this.user = user;
    this.isLogin = true;
  }

}