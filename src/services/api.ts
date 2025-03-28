const API_URL = 'http://localhost:8000/api';

export interface Veterinaire {
  id: number;
  nom: string;
  specialite: string;
  ville: string;
  disponible: boolean;
  telephone: string;
  photo: string;
}

export const api = {
  // Récupérer tous les vétérinaires
  getVeterinaires: async (): Promise<Veterinaire[]> => {
    const response = await fetch(`${API_URL}/veterinaires/`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des vétérinaires');
    }
    return response.json();
  },

  // Récupérer les vétérinaires disponibles
  getVeterinairesDisponibles: async (): Promise<Veterinaire[]> => {
    const response = await fetch(`${API_URL}/veterinaires/disponibles/`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des vétérinaires disponibles');
    }
    return response.json();
  },

  // Récupérer les vétérinaires par ville
  getVeterinairesParVille: async (ville: string): Promise<Veterinaire[]> => {
    const response = await fetch(`${API_URL}/veterinaires/par_ville/?ville=${encodeURIComponent(ville)}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des vétérinaires par ville');
    }
    return response.json();
  },

  // Envoyer un message à un vétérinaire
  envoyerMessage: async (veterinaireId: number, message: string): Promise<void> => {
    const response = await fetch(`${API_URL}/veterinaires/${veterinaireId}/message/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message');
    }
  },
}; 