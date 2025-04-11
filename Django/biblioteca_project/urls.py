from django.urls import path
from django.contrib import admin
from biblioteca import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('crear_autor/', views.crear_autor, name='crear_autor'),
    ]
