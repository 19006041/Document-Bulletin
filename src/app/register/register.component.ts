import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';
import * as sanitizeHtml from 'sanitize-html';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  requiredEmailError = 'Email is required';
  invalidEmailError = 'Email is invalid';
  passwordError = 'Password is required';
  invalidPasswordError =
    'Password should be a minimum of 8 characters and contain at least 1 number';
  requiredContactError = 'Cellphone number is required';
  invalidContactError = 'Contact number invalid';
  nonMatchError = 'Passwords should match';


  //Intializing the new user object which will be added to the database.
  registerUserData: any = {};
  constructor(private _auth: AuthService, private _router: Router,  private logger: LogService) {}

  ngOnInit(): void {}

  registerUser(regForm: NgForm) {
    //Adding the new user to the database and logging them in.
    if (regForm.valid) {

      sanitizeHtml(this.registerUserData)
      this._auth.registerUser(this.registerUserData).subscribe(
        (res) => {
          //console.log(res);
          this.logger.log("Successful Register Attempt by user " + this.registerUserData.email);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/bulletin']);
        },
        (err) => {
          this.logger.log("Unsuccessful Register Attempt");
        }
      );
    }
  }
}

