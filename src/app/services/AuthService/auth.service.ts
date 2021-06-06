import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  rootUrl :string = 'http://localhost:5000';

  signupUser(name: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.rootUrl}/auth/signup`, { name, email, password, confirmPassword });
  }
  
  loginUser(email: string, password: string) {
    return this.http.post(`${this.rootUrl}/auth/login`, { email, password });
  }

  // getCurrentUserFromToken() {
    
  // }
}
