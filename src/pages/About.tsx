import React from 'react';
import { Shield, Award, Users, Globe } from 'lucide-react';

function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos d'Anim-Crea</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre partenaire de confiance pour la santé animale au Sénégal
          </p>
        </div>

        {/* Section Mission et Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Notre Mission</h2>
            <p className="text-gray-600">
              Fournir une assistance vétérinaire rapide et professionnelle aux éleveurs du Sénégal,
              contribuant ainsi à la santé animale et au développement de l'élevage dans le pays.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Notre Vision</h2>
            <p className="text-gray-600">
              Devenir la référence en matière d'assistance vétérinaire d'urgence au Sénégal,
              en utilisant la technologie pour rapprocher les éleveurs des professionnels de santé animale.
            </p>
          </div>
        </div>

        {/* Section Valeurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
              <p className="text-gray-600">Un service sur lequel vous pouvez compter 24/7</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Des soins de qualité par des professionnels qualifiés</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proximité</h3>
              <p className="text-gray-600">Une présence dans toutes les régions du Sénégal</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">L'utilisation de la technologie au service de l'élevage</p>
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600">Interventions réussies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Vétérinaires partenaires</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">14</div>
              <p className="text-gray-600">Régions couvertes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;