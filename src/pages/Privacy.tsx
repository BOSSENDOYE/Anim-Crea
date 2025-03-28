import React from 'react';
import { translations } from '../i18n/translations';

interface PrivacyProps {
  language: 'fr' | 'wo';
}

function Privacy({ language }: PrivacyProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{translations[language].privacy}</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold mb-4">{translations[language].privacy1}</h2>
            <p className="text-gray-600 mb-6">{translations[language].privacy1Content}</p>
            
            <h2 className="text-2xl font-semibold mb-4">{translations[language].privacy2}</h2>
            <p className="text-gray-600 mb-6">{translations[language].privacy2Content}</p>
            
            <h2 className="text-2xl font-semibold mb-4">{translations[language].privacy3}</h2>
            <p className="text-gray-600 mb-6">{translations[language].privacy3Content}</p>
            
            <h2 className="text-2xl font-semibold mb-4">{translations[language].privacy4}</h2>
            <p className="text-gray-600">{translations[language].privacy4Content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 