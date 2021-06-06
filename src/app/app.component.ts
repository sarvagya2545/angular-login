import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  userName: string | null = null;
  constructor(private auth: AuthService, private router: Router) {
    // this.auth.getCurrentUserFromToken().subscribe((data: any) => {
    //   const { name, email } = data;
    //   this.auth.setUserData(name, email);
    //   this.isAuthenticated = this.auth.loggedIn();
    //   this.userName = this.auth.getUserData().name;
    //   this.router.navigateByUrl('/dashboard');
    // }, err => console.log(err));

    // this.isAuthenticated = this.auth.loggedIn();
    // this.userName = this.auth.getUserData().name;
    // console.log(this.userName, this.isAuthenticated);
  }

  ngOnInit() {
  }

  logout() {
    // this.auth.logoutUser().subscribe(data => {
    //   console.log(data);
    //   this.router.navigateByUrl('/');
    // }, err => console.log(err));
    // this.auth.clearUserData();
  }

  ngOnChanges() {

  }
}
