import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }

  loggedIn(){
    //returning a true or false depending on whether a token is present.
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}

