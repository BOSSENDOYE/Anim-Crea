import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Layout = () => {
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
              <Link to="/" className="hover:text-green-200">Accueil</Link>
              <Link to="/services" className="hover:text-green-200">Services</Link>
              <Link to="/about" className="hover:text-green-200">À propos</Link>
              <Link to="/contact" className="hover:text-green-200">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Anim-Crea</h4>
              <p className="text-gray-400">Votre plateforme d'assistance vétérinaire d'urgence au Sénégal</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: contact@anim-crea.sn</p>
              <p className="text-gray-400">Tél: +221 XX XXX XX XX</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Liens Utiles</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><Link to="/terms" className="hover:text-white">Conditions d'utilisation</Link></li>
                <li className="mb-2"><Link to="/privacy" className="hover:text-white">Politique de confidentialité</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Anim-Crea. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;