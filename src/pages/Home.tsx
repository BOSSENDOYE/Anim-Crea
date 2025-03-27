import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Search, MessageCircle, Users, X, ChevronLeft, ChevronRight,  } from 'lucide-react';

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

// Images pour le carrousel
const heroImages = [
  {
  Images:["assets/Assistance Vétérinaire dUrgence avec un Sénégalais.png,"],
    title: "Assistance Vétérinaire d'Urgence",
    subtitle: "Des experts disponibles 24/7 pour vos animaux"
  },
  {
    url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=2070&h=800",
    title: "Santé Animale Professionnelle",
    subtitle: "Une équipe qualifiée à votre service"
  },
  {
    url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2070&h=800",
    title: "Couverture Nationale",
    subtitle: "Présents dans toutes les régions du Sénégal"
  }
];

const MessageModal: React.FC<MessageModalProps> = ({ veterinaire, onClose }) => {
  const [message, setMessage] = useState('');

  if (!veterinaire) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 2,
    nom: "Dr. Moussa Sow",
    specialite: "Volailles",
    ville: "Thiès",
    disponible: true,
    telephone: "+221 76 234 56 78",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 3,
    nom: "Dr. Aminata Fall",
    specialite: "Animaux de compagnie",
    ville: "Saint-Louis",
    disponible: false,
    telephone: "+221 70 345 67 89",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

function Home() {
  const [selectedVeterinaire, setSelectedVeterinaire] = useState<Veterinaire | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const filteredVeterinaires = veterinaires.filter((vet) => {
    const query = searchQuery.toLowerCase();
    return (
      vet.nom.toLowerCase().includes(query) ||
      vet.specialite.toLowerCase().includes(query) ||
      vet.ville.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {/* Hero Section avec Carrousel */}
      <div className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-5xl font-bold mb-4 text-center transform transition-all duration-500 translate-y-0 opacity-100">
                {image.title}
              </h2>
              <p className="text-2xl mb-8 text-center max-w-2xl transform transition-all duration-500 translate-y-0 opacity-100">
                {image.subtitle}
              </p>
              <div className={`w-full max-w-2xl mx-auto px-4 transition-all duration-300 transform ${
                isSearchFocused ? 'scale-105' : 'scale-100'
              }`}>
                <div className="bg-white rounded-lg p-2 flex items-center shadow-lg">
                  <Search className="text-gray-400 ml-2" />
                  <input
                    type="text"
                    placeholder="Rechercher par ville, spécialité ou nom..."
                    className="w-full p-2 outline-none text-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Features avec animation au survol */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Clock className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Assistance 24/7</h3>
              <p className="text-gray-600 text-center">
                Une équipe de vétérinaires disponible jour et nuit pour répondre à vos urgences
              </p>
            </div>
            <div className="p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <MapPin className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Couverture Nationale</h3>
              <p className="text-gray-600 text-center">
                Un réseau de professionnels présent dans toutes les régions du Sénégal
              </p>
            </div>
            <div className="p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Experts Qualifiés</h3>
              <p className="text-gray-600 text-center">
                Des vétérinaires expérimentés et spécialisés dans différents domaines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vétérinaires disponibles */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Vétérinaires Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVeterinaires.map((vet) => (
              <div
                key={vet.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={vet.photo}
                    alt={vet.nom}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                    vet.disponible ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {vet.disponible ? 'Disponible' : 'Indisponible'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vet.nom}</h3>
                  <p className="text-green-600 font-medium mb-2">{vet.specialite}</p>
                  <p className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    {vet.ville}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${vet.telephone}`}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
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

      {/* Modal de message */}
      {selectedVeterinaire && (
        <MessageModal
          veterinaire={selectedVeterinaire}
          onClose={() => setSelectedVeterinaire(null)}
        />
      )}
    </>
  );
}

export default Home;