import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Search, MessageCircle, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../i18n/translations';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types pour les vétérinaires
interface Veterinaire {
  id: number;
  nom: string;
  specialite: string;
  ville: string;
  disponible: boolean;
  telephone: string;
  photo: string;
  experience: string;
  education: string;
  languages: string[];
  lastUpdate: Date;
  horaires: {
    debut: string;
    fin: string;
    jours: string[];
  };
}

interface MessageModalProps {
  veterinaire: Veterinaire | null;
  onClose: () => void;
}

// Images pour le carrousel
const heroImages = [
  {
    url: "src/assets/th.jpg",
    title: "Santé Animale Professionnelle",
    subtitle: "Une équipe qualifiée à votre service"
  },
  {
    url: "src/assets/une couverture nationale pour une application de suivi délevage avec un Senegalais (1).png",
    title: "Couverture Nationale",
    subtitle: "Présents dans toutes les régions du Sénégal"
  },
  {
    url: "src/assets/pp.jpeg",
    title: "Expertise Vétérinaire",
    subtitle: "Des professionnels hautement qualifiés"
  },
  {
    url: "src/assets/bvv.jpeg",
    title: "Service d'Urgence",
    subtitle: "Une assistance rapide et efficace"
  }
];

// Liste des vétérinaires (simulation de données)
const veterinairesList: Veterinaire[] = [
  {
    id: 1,
    nom: "Dr. Fatou Diop",
    specialite: "Bovins et Ovins",
    ville: "Dakar",
    disponible: true,
    telephone: "+221 77 123 45 67",
    photo: "src/assets/Assistance Vétérinaire dUrgence avec un Sénégalais.png",
    experience: "5 ans",
    education: "Université de Dakar",
    languages: ["fr", "wo"],
    lastUpdate: new Date(),
    horaires: {
      debut: "08:00",
      fin: "17:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 2,
    nom: "Dr. Moussa Sow",
    specialite: "Volailles",
    ville: "Thiès",
    disponible: false,
    telephone: "+221 76 234 56 78",
    photo: "src/assets/une vétérinaire sénégalaise.png",
    experience: "3 ans",
    education: "Université de Thiès",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "09:00",
      fin: "16:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 3,
    nom: "Dr. Aminata Fall",
    specialite: "Animaux de compagnie",
    ville: "Saint-Louis",
    disponible: true,
    telephone: "+221 70 345 67 89",
    photo: "src/assets/Assistance Vétérinaire dUrgence.png",
    experience: "4 ans",
    education: "Université de Saint-Louis",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "08:00",
      fin: "17:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 4,
    nom: "Dr. Khady Fall",
    specialite: "Ladoum",
    ville: "Louga",
    disponible: true,
    telephone: "+221 70 345 67 89",
    photo: "src/assets/Assistance Vétérinaire dUrgence.png",
    experience: "3 ans",
    education: "Université de dakar",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "08:00",
      fin: "17:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 5,
    nom: "Dr. Bosse Ndoye",
    specialite: "Bovins et Ovins",
    ville: "Tivaouane",
    disponible: false,
    telephone: "+221 70 231 82 32",
    photo: "src/assets/WhatsApp Image 2025-02-13 à 22.47.43_7952d993.jpg",
    experience: "2 ans",
    education: "Université de Bambey",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "09:00",
      fin: "16:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 6,
    nom: "Dr. Momar Ndoye",
    specialite: "Bovins et Ovins",
    ville: "Kaolack",
    disponible: true,
    telephone: "+221 76 453 24 56",
    photo: "src/assets/WhatsApp Image 2024-12-16 à 14.16.12_b8b43f56.jpg",
    experience: "4 ans",
    education: "Université de bambey",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "08:00",
      fin: "17:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  },
  {
    id: 7,
    nom: "Dr. khadim",
    specialite: "Bovins et Ovins",
    ville: "Diourbel",
    disponible: true,
    telephone: "+221 77 231 82 32",
    photo: "src/assets/WhatsApp Image 2024-12-16 à 14.16.12_b8b43f56.jpg",
    experience: "3 ans",
    education: "Université de Dakar",
    languages: ["fr"],
    lastUpdate: new Date(),
    horaires: {
      debut: "09:00",
      fin: "16:00",
      jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    }
  }
];

const MessageModal: React.FC<MessageModalProps> = ({ veterinaire, onClose }) => {
  const [message, setMessage] = useState('');
  const [language] = useState<'fr' | 'wo'>('fr');

  if (!veterinaire) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{veterinaire.nom}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Informations détaillées du vétérinaire */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">{translations[language].specialties}</h4>
            <p className="text-gray-600">{veterinaire.specialite}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{translations[language].experience}</h4>
            <p className="text-gray-600">{veterinaire.experience}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{translations[language].education}</h4>
            <p className="text-gray-600">{veterinaire.education}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{translations[language].languages}</h4>
            <p className="text-gray-600">{veterinaire.languages.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{translations[language].availability}</h4>
            <p className="text-gray-600">
              {veterinaire.horaires.debut} - {veterinaire.horaires.fin}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Téléphone</h4>
            <p className="text-gray-600">{veterinaire.telephone}</p>
          </div>
        </div>

        {/* Formulaire de message */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 h-32"
            placeholder={translations[language].writeMessage}
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              {translations[language].send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface HomeProps {
  language: 'fr' | 'wo';
}

function Home({ language }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [veterinaires] = useState<Veterinaire[]>(veterinairesList);
  const [selectedVeterinaire, setSelectedVeterinaire] = useState<Veterinaire | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effet de parallaxe amélioré
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Animation du texte avec parallaxe
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation des cartes avec effet de profondeur
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Animation des statistiques
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Effet de particules en arrière-plan
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  // Suivi de la position de la souris pour l'effet de parallaxe
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fonction pour gérer le changement de recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Fonction pour filtrer les vétérinaires
  const filteredVeterinaires = veterinaires.filter((vet) => {
    const query = searchQuery.toLowerCase();
    return (
      vet.nom.toLowerCase().includes(query) ||
      vet.specialite.toLowerCase().includes(query) ||
      vet.ville.toLowerCase().includes(query)
    );
  });

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Particules en arrière-plan */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute bg-green-500/10 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              x: particle.x,
              y: particle.y
            }}
            animate={{
              y: [particle.y, particle.y - 100],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section avec Parallaxe amélioré */}
      <section className="relative h-[100vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                scale: 1,
                x: mousePosition.x,
                y: mousePosition.y
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 1,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{ scale }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-50"
                style={{ opacity }}
              />
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                style={{ y: textY }}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  className="text-7xl font-bold mb-6 text-center"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {image.title}
                </motion.h2>
                <motion.p 
                  className="text-4xl mb-12 text-center max-w-3xl"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {image.subtitle}
                </motion.p>
                <motion.div 
                  className="w-full max-w-2xl mx-auto px-4"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center shadow-xl">
                    <Search className="text-gray-400 ml-2" />
                    <input
                      type="text"
                      placeholder={translations[language].search}
                      className="w-full p-3 outline-none text-gray-700 bg-transparent"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <motion.button 
                      className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        backgroundColor: "#059669"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {translations[language].searchButton}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Boutons de navigation avec effet de survol amélioré */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all"
          whileHover={{ 
            scale: 1.2, 
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={28} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all"
          whileHover={{ 
            scale: 1.2, 
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={28} />
        </motion.button>
      </section>

      {/* Features avec animation au survol améliorée */}
      <motion.div 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  backgroundColor: "#dcfce7"
                }}
                transition={{ duration: 0.5 }}
              >
                <Clock className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{translations[language].assistance}</h3>
              <p className="text-gray-600 text-center">
                {translations[language].assistanceDescription}
              </p>
            </motion.div>
            <motion.div 
              className="p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  backgroundColor: "#dcfce7"
                }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{translations[language].coverage}</h3>
              <p className="text-gray-600 text-center">
                {translations[language].coverageDescription}
              </p>
            </motion.div>
            <motion.div 
              className="p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  backgroundColor: "#dcfce7"
                }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{translations[language].experts}</h3>
              <p className="text-gray-600 text-center">
                {translations[language].expertsDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section Introduction des Vétérinaires avec compteurs animés améliorés */}
      <motion.div 
        ref={ref}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{translations[language].meetOurVets}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations[language].meetOurVetsDescription}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
            >
              <motion.div 
                className="text-5xl font-bold text-green-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                50+
              </motion.div>
              <p className="text-gray-600 text-lg">{translations[language].experiencedVets}</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
            >
              <motion.div 
                className="text-5xl font-bold text-green-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                14
              </motion.div>
              <p className="text-gray-600 text-lg">{translations[language].regionsCovered}</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#f8fafc"
              }}
            >
              <motion.div 
                className="text-5xl font-bold text-green-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                24/7
              </motion.div>
              <p className="text-gray-600 text-lg">{translations[language].emergencySupport}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Liste des vétérinaires avec animations au défilement améliorées */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVeterinaires.map((veterinaire, index) => (
              <motion.div 
                key={veterinaire.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  backgroundColor: "#f8fafc"
                }}
              >
                <motion.div className="relative overflow-hidden">
                  <motion.img
                    src={veterinaire.photo}
                    alt={veterinaire.nom}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{veterinaire.nom}</h3>
                  <p className="text-gray-600 mb-4">{veterinaire.specialite}</p>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin size={18} />
                    <span>{veterinaire.ville}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mb-6">
                    <Clock size={18} />
                    <span>
                      {veterinaire.horaires.debut} - {veterinaire.horaires.fin}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <motion.span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        veterinaire.disponible
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                        backgroundColor: veterinaire.disponible ? "#059669" : "#dc2626"
                      }}
                    >
                      {veterinaire.disponible
                        ? translations[language].available
                        : translations[language].unavailable}
                    </motion.span>
                    <motion.button
                      onClick={() => setSelectedVeterinaire(veterinaire)}
                      className="bg-white text-green-600 px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-50 transition-colors flex items-center gap-2"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        backgroundColor: "#f0fdf4"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={18} />
                      <span>{translations[language].contact}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal de message avec animation améliorée */}
      <AnimatePresence>
        {selectedVeterinaire && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <MessageModal
                veterinaire={selectedVeterinaire}
                onClose={() => setSelectedVeterinaire(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;