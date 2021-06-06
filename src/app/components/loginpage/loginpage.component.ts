import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';

interface LoginObject {
  email: string;
  password: string;
  passwordVisible: boolean;
}

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  user: LoginObject = {
    email: '',
    password: '',
    passwordVisible: false
  }

  error = {
    msg: '',
    isError: false
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.auth.loginUser(this.user.email, this.user.password)
      .subscribe(data => {
        console.log(data)
        this.error = {
          isError: false,
          msg: ''
        }
      }, err => {
        this.error.msg = err.error.error;
        this.error.isError = true;
      });
  }
}
