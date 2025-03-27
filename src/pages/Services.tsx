import React from 'react';
import { Stethoscope, Syringe, Microscope, HeartPulse, Pill, FileText } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Consultations d'urgence",
    description: "Service de consultation vétérinaire disponible 24h/24 et 7j/7 pour les situations d'urgence."
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Programme complet de vaccination pour tous types d'animaux d'élevage."
  },
  {
    icon: Microscope,
    title: "Diagnostics",
    description: "Examens et diagnostics précis pour identifier rapidement les problèmes de santé."
  },
  {
    icon: HeartPulse,
    title: "Suivi médical",
    description: "Suivi régulier de la santé de votre cheptel avec des visites programmées."
  },
  {
    icon: Pill,
    title: "Traitements",
    description: "Administration de traitements adaptés et conseils pour le rétablissement."
  },
  {
    icon: FileText,
    title: "Conseils sanitaires",
    description: "Recommandations pour la prévention des maladies et l'optimisation de la santé animale."
  }
];

function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services vétérinaires pour assurer la santé et le bien-être de vos animaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Besoin d'une assistance immédiate ?</h2>
          <a
            href="tel:+221XXXXXXXX"
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 inline-flex items-center"
          >
            <Stethoscope className="mr-2" />
            Contacter un vétérinaire
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;