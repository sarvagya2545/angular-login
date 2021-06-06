import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  rootUrl :string = 'http://localhost:5000';

  signupUser(name: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.rootUrl}/auth/signup`, { name, email, password, confirmPassword }, { withCredentials: true });
  }
  
  loginUser(email: string, password: string) {
    return this.http.post(`${this.rootUrl}/auth/login`, { email, password }, { withCredentials: true });
  }

  getCurrentUserFromToken(token: string) {
    return this.http.get(`${this.rootUrl}/auth/user`, { withCredentials: true });
  }
}
