import { Injectable } from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:8000/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  createPost(content: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, { content });
  }

  toggleLike(postId: number): Observable<{ liked: boolean; likes_count: number }> {
    // обратите внимание на именно такой URL: /api/posts/{id}/toggle-like/
    return this.http.post<{ liked: boolean; likes_count: number }>(
      `${this.apiUrl}/${postId}/toggle-like/`,
      {}
    );
  }
}
