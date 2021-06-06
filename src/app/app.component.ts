import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {
    this.auth.getCurrentUserFromToken().subscribe((data: any) => {
      const { name, email } = data;
      this.auth.setUserData(name, email);
      this.router.navigateByUrl('/dashboard');
    }, err => console.log(err));
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logoutUser().subscribe(data => console.log(data), err => console.log(err));
    this.router.navigateByUrl('/');
  }
}
