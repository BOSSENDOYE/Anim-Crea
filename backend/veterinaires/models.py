from django.db import models

# Create your models here.

class Veterinaire(models.Model):
    nom = models.CharField(max_length=100)
    specialite = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)
    disponible = models.BooleanField(default=True)
    telephone = models.CharField(max_length=20)
    photo = models.URLField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.nom} - {self.specialite}"

    class Meta:
        verbose_name = "Vétérinaire"
        verbose_name_plural = "Vétérinaires"
