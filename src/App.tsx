import React, { useState } from 'react';
import { Phone, MapPin, Clock, Search, MessageCircle, Shield, Users, X } from 'lucide-react';

// Types pour les vétérinaires
interface Veterinaire {
  id: number;
  nom: string;
  specialite: string;
  ville: string;
  disponible: boolean;
  telephone: string;
  photo: string;
}

interface MessageModalProps {
  veterinaire: Veterinaire | null;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ veterinaire, onClose }) => {
  const [message, setMessage] = useState('');

  if (!veterinaire) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer le message
    alert('Message envoyé avec succès !');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Message à {veterinaire.nom}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 h-32"
            placeholder="Écrivez votre message ici..."
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Liste des vétérinaires (simulation de données)
const veterinaires: Veterinaire[] = [
  {
    id: 1,
    nom: "Dr. Fatou Diop",
    specialite: "Bovins et Ovins",
    ville: "Dakar",
    disponible: true,
    telephone: "+221 77 123 45 67",
    photo: "assets/Assistance Vétérinaire dUrgence avec un Sénégalais.png"
  },
  {
    id: 2,
    nom: "Dr. Moussa Sw",
    specialite: "Volailles",
    ville: "Thiès",
    disponible: true,
    telephone: "+221 76 234 56 78",
    photo: ""
  },
  {
    id: 3,
    nom: "Dr. Aminata Fall",
    specialite: "Animaux de compagnie",
    ville: "Saint-Louis",
    disponible: true,
    telephone: "+221 70 345 67 89",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 4,
    nom: "Dr. Khady Fall",
    specialite: "Ladoum",
    ville: "Louga",
    disponible: true,
    telephone: "+221 70 345 67 89",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
  },
  
];

function App() {
  const [selectedVeterinaire, setSelectedVeterinaire] = useState<Veterinaire | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield size={32} />
              <h1 className="text-2xl font-bold">Anim-Crea</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="" className="hover:text-green-200">Accueil</a>
              <a href="#" className="hover:text-green-200">Services</a>
              <a href="#" className="hover:text-green-200">À propos</a>
              <a href="#" className="hover:text-green-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Assistance Vétérinaire d'Urgence</h2>
          <p className="text-xl mb-8">Trouvez rapidement un vétérinaire disponible au Sénégal</p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex items-center">
            <Search className="text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Rechercher par ville ou spécialité..."
              className="w-full p-2 outline-none text-gray-700"
            />
            <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Assistance 24/7</h3>
              <p className="text-gray-600">Accédez à des vétérinaires disponibles à tout moment</p>
            </div>
            <div className="p-6">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Couverture Nationale</h3>
              <p className="text-gray-600">Des vétérinaires dans toutes les régions du Sénégal</p>
            </div>
            <div className="p-6">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experts Qualifiés</h3>
              <p className="text-gray-600">Des professionnels expérimentés à votre service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vétérinaires disponibles */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vétérinaires Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veterinaires.map((vet) => (
              <div key={vet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={vet.photo}
                  alt={vet.nom}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{vet.nom}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      vet.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {vet.disponible ? 'Disponible' : 'Indisponible'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{vet.specialite}</p>
                  <p className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    {vet.ville}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${vet.telephone}`}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center"
                    >
                      <Phone size={16} className="mr-2" />
                      Appeler
                    </a>
                    <button 
                      onClick={() => vet.disponible && setSelectedVeterinaire(vet)}
                      className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center ${
                        vet.disponible 
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!vet.disponible}
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Anim-Crea</h4>
              <p className="text-gray-400">Votre plateforme d'assistance vétérinaire d'urgence au Sénégal</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: contact@anim-crea.sn</p>
              <p className="text-gray-400">Tél: +221 78 157 62 24</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Liens Utiles</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white">Conditions d'utilisation</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Anim-Crea. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modal de message */}
      {selectedVeterinaire && (
        <MessageModal
          veterinaire={selectedVeterinaire}
          onClose={() => setSelectedVeterinaire(null)}
        />
      )}
    </div>
  );
}

export default App;