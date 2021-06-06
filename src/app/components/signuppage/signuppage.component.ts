import { Component, OnInit } from '@angular/core';

interface SignUpObject {
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

  constructor() {
  }

  user: SignUpObject = {
    email: '',
    password: '',
    confirmPassword: '',
    passwordVisible: false
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.user);
  }

  log(x: unknown) { console.log(x); }

}
