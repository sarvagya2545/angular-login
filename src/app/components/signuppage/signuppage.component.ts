import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService) {
  }

  user: SignUpObject = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordVisible: false
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.auth.signupUser(this.user.name, this.user.email, this.user.password, this.user.confirmPassword)
      .subscribe((data) => {
        console.log(data);
      });
  }

  log(x: unknown) { console.log(x); }

}
