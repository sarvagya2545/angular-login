import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserData {
  isAuthenticated: boolean;
  name: string | null;
  email: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  rootUrl :string = 'http://localhost:5000';

  userData: UserData = {
    isAuthenticated: false,
    name: null,
    email: null
  }

  signupUser(name: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.rootUrl}/auth/signup`, { name, email, password, confirmPassword }, { withCredentials: true });
  }
  
  loginUser(email: string, password: string) {
    return this.http.post(`${this.rootUrl}/auth/login`, { email, password }, { withCredentials: true });
  }

  logoutUser() {
    this.clearUserData();
    return this.http.post(`${this.rootUrl}/auth/logout`, {}, { withCredentials: true });
  }

  getCurrentUserFromToken() {
    return this.http.get(`${this.rootUrl}/auth/user`, { withCredentials: true });
  }

  setUserData(name: string, email: string): void {
    this.userData.name = name;
    this.userData.email = email;
    this.userData.isAuthenticated = true;
  }

  getUserData(): UserData {
    return this.userData;
  }

  clearUserData(): void {
    this.userData.name = this.userData.email = null;
    this.userData.isAuthenticated = false;
  }

  loggedIn(): boolean {
    return this.userData.isAuthenticated; 
  }
}
