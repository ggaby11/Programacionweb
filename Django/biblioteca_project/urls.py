from django.urls import path
from django.contrib import admin
from biblioteca import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('autores/', views.lista_autores, name='lista_autores'),
    path('libros/', views.lista_libros, name='lista_libros'),
    path('resenias/', views.lista_resenias, name='lista_resenias'),
]
