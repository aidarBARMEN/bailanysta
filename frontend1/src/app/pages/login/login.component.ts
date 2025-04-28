import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onLogin() {
    this.error = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        // сохраняем токен (предполагая, что в res.access хранится JWT)
        this.authService.saveToken(res.access);
        this.toastr.success('Успешный вход', 'Добро пожаловать!');
        // редирект в ленту
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        this.error = 'Неверный логин или пароль';
        this.toastr.error('Проверьте введённые данные', 'Ошибка входа');
      }
    });
  }
}
