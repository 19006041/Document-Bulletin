import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  requiredEmailError = 'Email is required';
  invalidEmailError = 'Email is invalid';
  passwordError = 'Password is required';
  loginError = '';

  //Initializing the user which will be logged in.
  loginUserData: any = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser(logForm: NgForm) {
    //Checking if the user exists and logging them in if the credentials are valid.
    if (logForm.valid) {
      this._auth.loginUser(this.loginUserData).subscribe(
        (res) => {
          //console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/bulletin']);
        },
        (err) => {
          console.log(err);
          this.loginError = 'Username or Password invalid';
        }
      );
    }
  }
}
