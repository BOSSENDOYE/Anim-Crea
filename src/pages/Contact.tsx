import React, { useState } from 'react';
import { translations } from '../i18n/translations';

interface ContactProps {
  language: 'fr' | 'wo';
}

function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{translations[language].contact}</h1>
          <p className="text-xl text-gray-600 text-center mb-16">{translations[language].contactDescription}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">{translations[language].contact}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{translations[language].address}</h3>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{translations[language].phone}</h3>
                  <p className="text-gray-600">+221 78 157 62 24</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{translations[language].workingHours}</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  {translations[language].sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;