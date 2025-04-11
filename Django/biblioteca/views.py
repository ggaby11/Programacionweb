from django.http import HttpResponse

def lista_autores(request):
    return HttpResponse("Lista de autores")

def lista_libros(request):
    return HttpResponse("Lista de libros")

def lista_resenias(request):
    return HttpResponse("Lista de reseñas")
