from rest_framework import serializers
from .models import Veterinaire

class VeterinaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veterinaire
        fields = '__all__' 