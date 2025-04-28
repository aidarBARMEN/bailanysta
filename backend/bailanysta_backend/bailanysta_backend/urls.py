# backend/bailanysta_backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # всё, что связано с юзерами: регистрация, token/refresh, список
    path('api/users/', include('users.urls')),  

    # лента, создание постов и лайки
    path('api/posts/', include('posts.urls')),
]
