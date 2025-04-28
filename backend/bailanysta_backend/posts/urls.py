# backend/bailanysta_backend/posts/urls.py
from django.urls import path
from .views import (
    PostListCreateView,
    UserPostListView,
    ToggleLikeView,
)

urlpatterns = [
    path('',                PostListCreateView.as_view(), name='post-list-create'),
    path('user/<int:user_id>/', UserPostListView.as_view(),   name='user-posts'),
    path('<int:pk>/like/',   ToggleLikeView.as_view(),         name='post-toggle-like'),
]
