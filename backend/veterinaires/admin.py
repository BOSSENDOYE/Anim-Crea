from django.contrib import admin
from .models import Veterinaire

@admin.register(Veterinaire)
class VeterinaireAdmin(admin.ModelAdmin):
    list_display = ('nom', 'specialite', 'ville', 'disponible', 'telephone')
    list_filter = ('disponible', 'specialite', 'ville')
    search_fields = ('nom', 'specialite', 'ville')
