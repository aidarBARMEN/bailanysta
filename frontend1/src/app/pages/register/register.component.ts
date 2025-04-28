import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    age: null
  };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.user).subscribe({
      next: () => {
        alert('Регистрация успешна!');
        this.router.navigate(['/login']);
      },
      error: err => {
        alert('Успешно');
        console.error(err);
      }
    });
  }
}
