from django.contrib import admin
from .models import Autor, Libro, Resenia

admin.site.register(Autor)
admin.site.register(Libro)
admin.site.register(Resenia)


class autorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'nacionalidad')
    search_fields = ('nombre')

class libroAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'autor', 'fecha_publicado')
    search_fields = ('titulo', 'autor_nombre')
    list_filter = ('fecha_publicado', 'autor')

class reseniaAdmin(admin.ModelAdmin):
    list_display = ('libro', 'calificacion', 'fecha')
    search_fields = ('libro_titulo', 'tecto')
    list_filter = ('calificacion', 'fecha')