import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'https://localhost:3000/api/register';
  private loginUrl = 'https://localhost:3000/api/login';

  constructor(private http: HttpClient, private _router: Router) {}

  //Authentication of a new user.
  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  //Authentication of a returning user.
  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  //Checking if a user is still logged in.
  loggedIn() {
    //returning a true or false depending on whether a token is present.
    return !!localStorage.getItem('token');
  }

  //Getting the Json Web Token.
  getToken() {
    return localStorage.getItem('token');
  }

  //Logging the user out and clearing the Json Web Token.
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
