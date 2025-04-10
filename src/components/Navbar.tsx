import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';
import logo from '../assets/Green White Minimalist Simple Farm Logo .png?url';

interface NavbarProps {
  language: 'fr' | 'wo';
  setLanguage: (lang: 'fr' | 'wo') => void;
}

function Navbar({ language, setLanguage }: NavbarProps) {
  return (
    <nav className="bg-green-800 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <img src={logo} alt="Anim-Crea Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold">Anim-Crea</span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center items-center">
            <Link to="/" className="text-white hover:text-green-200 transition-colors mx-4">
              {translations[language].home}
            </Link>
            <Link to="/services" className="text-white hover:text-green-200 transition-colors mx-4">
              {translations[language].services}
            </Link>
            <Link to="/about" className="text-white hover:text-green-200 transition-colors mx-4">
              {translations[language].about}
            </Link>
            <Link to="/contact" className="text-white hover:text-green-200 transition-colors mx-4">
              {translations[language].contact}
            </Link>
          </div>

          {/* Language Selector - Right */}
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'fr' | 'wo')}
            className="bg-transparent text-white border border-white rounded-md px-3 py-1 text-sm"
          >
            <option value="fr" className="text-black">FR</option>
            <option value="wo" className="text-black">WO</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 