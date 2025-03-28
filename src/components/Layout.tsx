import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { translations } from '../i18n/translations';

const Layout = () => {
  const [language, setLanguage] = useState<'fr' | 'wo'>('fr');
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield size={32} />
              <h1 className="text-2xl font-bold">Anim-Crea</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-green-200">{translations[language].home}</Link>
              <Link to="/services" className="hover:text-green-200">{translations[language].services}</Link>
              <Link to="/about" className="hover:text-green-200">{translations[language].about}</Link>
              <Link to="/contact" className="hover:text-green-200">{translations[language].contact}</Link>
            </nav>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'fr' | 'wo')}
              className="bg-transparent text-white border border-white rounded px-2 py-1"
            >
              <option value="fr">Français</option>
              <option value="wo">Wolof</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Outlet context={{ language }} />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Anim-Crea</h4>
              <p className="text-gray-400">{translations[language].footerDescription}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">{translations[language].contact}</h4>
              <p className="text-gray-400">Email: contact@anim-crea.sn</p>
              <p className="text-gray-400">Tél: +221 78 157 62 24</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">{translations[language].usefulLinks}</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><Link to="/terms" className="hover:text-white">{translations[language].terms}</Link></li>
                <li className="mb-2"><Link to="/privacy" className="hover:text-white">{translations[language].privacy}</Link></li>
                <li><Link to="/faq" className="hover:text-white">{translations[language].faq}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Anim-Crea. {translations[language].allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;