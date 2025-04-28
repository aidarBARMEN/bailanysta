import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private shown = false; // ✅ защита от спама

  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.shown = false;
      return true;
    } else {
      if (!this.shown) {
        this.toastr.error('Пожалуйста, залогиньтесь 🙏', 'Доступ ограничен 🔒');
        this.shown = true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }
}
