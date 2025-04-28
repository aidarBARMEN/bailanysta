import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone:false,
  styleUrls: ['./user-profile.component.css'],

})
export class UserProfileComponent implements OnInit {
  userId!: number;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserPosts(this.userId).subscribe(data => {
      this.posts = data;
    });
  }
}
