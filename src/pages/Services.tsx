import React from 'react';
import { translations } from '../i18n/translations';

interface ServicesProps {
  language: 'fr' | 'wo';
}

function Services({ language }: ServicesProps) {
  const services = [
    {
      title: translations[language].emergency,
      description: translations[language].emergencyDescription,
      icon: "🚑"
    },
    {
      title: translations[language].consultation,
      description: translations[language].consultationDescription,
      icon: "👨‍⚕️"
    },
    {
      title: translations[language].surgery,
      description: translations[language].surgeryDescription,
      icon: "🔪"
    },
    {
      title: translations[language].vaccination,
      description: translations[language].vaccinationDescription,
      icon: "💉"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{translations[language].services}</h1>
        <p className="text-xl text-gray-600 text-center mb-16">{translations[language].servicesDescription}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;