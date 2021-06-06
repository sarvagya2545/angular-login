import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  user: LoginObject = {
    email: '',
    password: '',
    passwordVisible: false
  }

  ngOnInit(): void {
  }

}
