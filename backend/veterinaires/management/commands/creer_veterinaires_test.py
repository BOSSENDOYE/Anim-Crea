from django.core.management.base import BaseCommand
from veterinaires.models import Veterinaire

class Command(BaseCommand):
    help = 'Crée des vétérinaires de test dans la base de données'

    def handle(self, *args, **kwargs):
        veterinaires = [
            {
                'nom': "Dr. Fatou Diop",
                'specialite': "Bovins et Ovins",
                'ville': "Dakar",
                'disponible': True,
                'telephone': "+221 77 123 45 67",
                'photo': "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                'nom': "Dr. Moussa Sow",
                'specialite': "Volailles",
                'ville': "Thiès",
                'disponible': True,
                'telephone': "+221 76 234 56 78",
                'photo': "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                'nom': "Dr. Aminata Fall",
                'specialite': "Animaux de compagnie",
                'ville': "Saint-Louis",
                'disponible': False,
                'telephone': "+221 70 345 67 89",
                'photo': "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                'nom': "Dr. Ibrahima Diallo",
                'specialite': "Équidés",
                'ville': "Dakar",
                'disponible': True,
                'telephone': "+221 77 456 78 90",
                'photo': "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                'nom': "Dr. Khady Ba",
                'specialite': "Animaux exotiques",
                'ville': "Dakar",
                'disponible': True,
                'telephone': "+221 76 567 89 01",
                'photo': "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=300&h=300"
            }
        ]

        for vet_data in veterinaires:
            Veterinaire.objects.create(**vet_data)

        self.stdout.write(self.style.SUCCESS(f'Successfully created {len(veterinaires)} vétérinaires de test')) 