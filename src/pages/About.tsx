import React from 'react';
import { Shield, Award, Users, Globe } from 'lucide-react';
import { translations } from '../i18n/translations';

interface AboutProps {
  language: 'fr' | 'wo';
}

function About({ language }: AboutProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{translations[language].about}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations[language].aboutDescription}
          </p>
        </div>

        {/* Section Mission et Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">{translations[language].ourMission}</h2>
            <p className="text-gray-600">
              {translations[language].missionDescription}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">{translations[language].ourVision}</h2>
            <p className="text-gray-600">
              {translations[language].visionDescription}
            </p>
          </div>
        </div>

        {/* Section Valeurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{translations[language].ourValues}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{translations[language].reliability}</h3>
              <p className="text-gray-600">{translations[language].reliabilityDescription}</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{translations[language].excellence}</h3>
              <p className="text-gray-600">{translations[language].excellenceDescription}</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{translations[language].proximity}</h3>
              <p className="text-gray-600">{translations[language].proximityDescription}</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{translations[language].innovation}</h3>
              <p className="text-gray-600">{translations[language].innovationDescription}</p>
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-12">{translations[language].ourImpact}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600">{translations[language].successfulInterventions}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">{translations[language].partnerVets}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">14</div>
              <p className="text-gray-600">{translations[language].coveredRegions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;