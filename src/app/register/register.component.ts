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
  registerUserData: any = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser(regForm: NgForm) {
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
