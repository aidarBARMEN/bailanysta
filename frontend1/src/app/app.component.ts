import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  username: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.username = this.authService.getUsername(); // Получаем имя пользователя из сервиса
  }

  logout() {
    this.authService.logout();          
    this.router.navigate(['/login']);   
  }
  get isLoggedIn(): boolean {
    return !!this.authService.getToken();
  }
}
