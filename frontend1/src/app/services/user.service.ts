import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get<any[]>(`http://127.0.0.1:8000/api/posts/user/${userId}/`);
  }
}
  
