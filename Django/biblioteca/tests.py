from django.test import TestCase
from .models import Autor, Libro, Resenia
from datetime import date

class BibliotecaTestCase(TestCase):
    def test_crear_modelos_uno(self):
        # Nuevo autor
        autor = Autor.objects.create(nombre="Franz Kafka", nacionalidad="Austriaco")

        #prueba
        self.assertEqual(Autor.objects.count(), 1)
        self.assertEqual(autor.nombre, "Franz Kafka")

        #Libro
        libro = Libro.objects.create(
            titulo="La metamorfosis",
            autor=autor,
            fecha_publicado=date(1915, 10, 1),
            resumen="La historia comienza con el despertar de Gregorio Samsa, encargado de mantener económicamente a toda su familia. El protagonista amanece con la sensación de haber tenido un sueño intranquilo..."
        )

        #prueba
        self.assertEqual(Libro.objects.count(), 1)
        self.assertEqual(libro.autor.nombre, "Franz Kafka")

        # Reseña
        resenia = Resenia.objects.create(
            libro=libro,
            texto="Excelente libro, una narracion que cautiva desde el comienzo con sus descripciones peculiares de lo podria parecer cotidiano",
            calificacion=5
        )

        # prueba
        self.assertEqual(Resenia.objects.count(), 1)
        self.assertEqual(resenia.libro.titulo, "La metamorfosis")
        self.assertEqual(resenia.calificacion, 5)

    def test_crear_modelos_uno(self):
        #Autor
        autor = Autor.objects.create(nombre="Gabriel García Marquez", nacionalidad="Colombiano")

        #prueba
        self.assertEqual(autor.nombre, "Gabriel García Marquez")
        self.assertEqual(Autor.objects.count(), 1)

        #Libro
        libro = Libro.objects.create(
            titulo="Del amor y otros demonios",
            autor=autor,
            fecha_publicado=date(1994, 1, 1),
            resumen="En Cartagena de las Indias, durante la época del virreinato, vivió una joven de cabello rojizo excepcional, que se pensaba estaba poseída por el demonio porque un perro rabioso la había mordido, Sierva Maria de los Angeles, era su nombre..."
        )

        #prueba
        self.assertEqual(libro.titulo, "Del amor y otros demonios")
        self.assertEqual(libro.autor.nombre, "Gabriel García Márquez")
        self.assertEqual(Libro.objects.count(), 1)

        #Reseña
        resenia = Resenia.objects.create(
            libro=libro,
            texto="Una novela interesante, una narrativa sencilla de seguir, personajes envolventes y una trama a mi parecer debatible pero fuera de lo comun para la epoca",
            calificacion=5
        )

        #prueba
        self.assertEqual(resenia.libro.titulo, "Del amor y otros demonios")
        self.assertEqual(resenia.calificacion, 5)
        self.assertEqual(Resenia.objects.count(), 1)
