import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/token/`, {
      username,
      password
    });
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
  saveUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
  }
  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/`);
  }
  register(data: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, data);
  }
  decodeToken(): { username: string; user_id: number } {
    const token = this.getToken()!;
    return jwtDecode<{ username: string; user_id: number }>(token);
  }
}
