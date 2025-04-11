from django.http import HttpResponse
from .models import Autor, Libro, Resenia

def crear_autor(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        nacionalidad = request.POST.get('nacionalidad')
        Autor.objects.create(nombre=nombre, nacionalidad=nacionalidad)

def crear_libro(request):
    if request.method == 'POST':
        titulo = request.POST.get('titulo')
        autor_id = request.POST.get('autor')
        fecha_publicado = request.POST.get('fecha de publicaicon')
        resumen = request.POST.get('resumen')
        autor = Autor.objects.get(id=autor_id)  # relacionamos con el objeto
        Libro.objects.create(
            titulo=titulo,
            autor=autor,
            fecha_publicado=fecha_publicado,
            resumen=resumen
        )
 
def crear_resenia(request):
    if request.method == 'POST':
        libro_id = request.POST.get('libro')
        texto = request.POST.get('texto')
        calificacion = request.POST.get('calificacion')
        libro = Libro.objects.get(id=libro_id)
        Resenia.objects.create(
            libro=libro,
            texto=texto,
            calificacion=calificacion
        )
 

