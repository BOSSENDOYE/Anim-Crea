import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'wo'>('fr');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/faq" element={<FAQ language={language} />} />
            <Route path="/terms" element={<Terms language={language} />} />
            <Route path="/privacy" element={<Privacy language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App; 