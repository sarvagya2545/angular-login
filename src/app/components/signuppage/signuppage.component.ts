import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

interface SignUpObject {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  passwordVisible: boolean;
}

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  user: SignUpObject = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordVisible: false
  }

  error = {
    isError: false,
    msg: ''
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.auth.signupUser(this.user.name, this.user.email, this.user.password, this.user.confirmPassword)
      .subscribe((data) => {
        console.log(data);

        this.error = {
          isError: false,
          msg: ''
        }
        this.router.navigateByUrl('/dashboard');
      }, err => {
        this.error = {
          isError: true,
          msg: err.error.error
        }
      });
  }

  log(x: unknown) { console.log(x); }

}
