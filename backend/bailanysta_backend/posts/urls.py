# backend/bailanysta_backend/posts/urls.py
from django.urls import path
from .views import (
    PostListCreateView,
    UserPostListView,
    ToggleLikeView,
)

urlpatterns = [
  path('',                  PostListCreateView.as_view()),
  path('<int:user_id>/',    UserPostListView.as_view()),
  path('<int:pk>/toggle-like/', ToggleLikeView.as_view()),
  path('user/<int:user_id>/', UserPostListView.as_view(), name='user-posts'),  # << вот это путь

  
]
