from django.db import models
from users.models import CustomUser
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='posts')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='liked_posts', blank=True)

    def __str__(self):
        return f"{self.author.username}: {self.content[:30]}"

    def toggle_like(self, user):
        if user in self.likes.all():
            self.likes.remove(user)
            return False  # убрал лайк
        else:
            self.likes.add(user)
            return True  # поставил лайк

    def likes_count(self):
        return self.likes.count()
