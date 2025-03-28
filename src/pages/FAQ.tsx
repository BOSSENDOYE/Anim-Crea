import React from 'react';
import { translations } from '../i18n/translations';

interface FAQProps {
  language: 'fr' | 'wo';
}

function FAQ({ language }: FAQProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{translations[language].faq}</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[language].faq1}</h2>
            <p className="text-gray-600">{translations[language].faq1Answer}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[language].faq2}</h2>
            <p className="text-gray-600">{translations[language].faq2Answer}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[language].faq3}</h2>
            <p className="text-gray-600">{translations[language].faq3Answer}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[language].faq4}</h2>
            <p className="text-gray-600">{translations[language].faq4Answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 