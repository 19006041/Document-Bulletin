import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser(regForm: NgForm) {
    //Adding the new user to the database and logging them in.
    if (regForm.valid) {
      this._auth.registerUser(this.registerUserData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/bulletin']);
        },
        (err) => console.log(err)
      );
    }
  }
}
