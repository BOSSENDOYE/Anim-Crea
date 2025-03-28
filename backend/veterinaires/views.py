from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Veterinaire
from .serializers import VeterinaireSerializer

# Create your views here.

class VeterinaireViewSet(viewsets.ModelViewSet):
    queryset = Veterinaire.objects.all()
    serializer_class = VeterinaireSerializer

    @action(detail=False, methods=['get'])
    def disponibles(self, request):
        vets_disponibles = self.queryset.filter(disponible=True)
        serializer = self.get_serializer(vets_disponibles, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def par_ville(self, request):
        ville = request.query_params.get('ville')
        if ville:
            vets_ville = self.queryset.filter(ville__iexact=ville)
            serializer = self.get_serializer(vets_ville, many=True)
            return Response(serializer.data)
        return Response([])

    @action(detail=True, methods=['post'])
    def message(self, request, pk=None):
        veterinaire = self.get_object()
        message = request.data.get('message')
        
        if not message:
            return Response(
                {'error': 'Le message est requis'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
            
        # Ici, vous pouvez ajouter la logique pour envoyer le message
        # Par exemple, l'enregistrer dans une base de données ou l'envoyer par email
        
        return Response({
            'message': 'Message envoyé avec succès',
            'veterinaire': veterinaire.nom,
            'contenu': message
        })
