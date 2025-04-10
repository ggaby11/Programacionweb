from django.db import models

class Autor(models.Model):
    nombre = models.CharField(max_legth=100)
    nacionalidad = models.CharField(max_legth=100)

    def __str__(self):
        return self.nombre
    

""""
class Libro():
    titulo
    fecha_publicado
    resumen
"""