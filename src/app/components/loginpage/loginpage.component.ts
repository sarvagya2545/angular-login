import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';

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

  constructor(private auth: AuthService) { }

  user: LoginObject = {
    email: '',
    password: '',
    passwordVisible: false
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.auth.loginUser(this.user.email, this.user.password)
      .subscribe(data => console.log(data));
  }
}
