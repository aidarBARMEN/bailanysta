import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  standalone: false,
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  newPostContent: string = '';

  constructor(
    private postService: PostService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Ошибка при загрузке постов', err)
    });
  }

  createPost() {
    if (!this.newPostContent.trim()) return;

    this.postService.createPost(this.newPostContent).subscribe({
      next: () => {
        this.toastr.success('Пост опубликован!');
        this.newPostContent = '';
        this.loadPosts();
      },
      error: (err) => {
        this.toastr.error('Ошибка при создании поста');
        console.error(err);
      }
    });
  }

 toggleLike(post: any) {
  this.postService.toggleLike(post.id).subscribe({
    next: (response) => {
      post.is_liked = response.liked;
      post.likes_count = response.likes_count;
    },
    error: (err) => {
      console.error("Ошибка при лайке:", err);
      this.toastr.error("Ошибка при лайке");
    }
  });
}

}
