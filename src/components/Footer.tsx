import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface FooterProps {
  language: 'fr' | 'wo';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.about}</h3>
            <p className="text-gray-400">{t.aboutDescription}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contactInfo}</h3>
            <p>Email: contact@anim-crea.sn</p>
            <p>Tél: +221 77 777 77 77</p>
            <p>Adresse: Dakar, Sénégal</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-gray-300">{t.faq}</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">{t.terms}</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300">{t.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Anim-Crea. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 