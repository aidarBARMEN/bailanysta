import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = null;
  userId: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decoded: any = jwtDecode(token);
      this.username = decoded.username;
      this.userId = decoded.user_id;
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.isLoggedIn = false;
    this.username = null;
    this.userId = null;
    this.router.navigate(['/login']);
  }
}
