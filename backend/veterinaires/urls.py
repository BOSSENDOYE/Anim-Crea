from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VeterinaireViewSet

router = DefaultRouter()
router.register(r'veterinaires', VeterinaireViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 