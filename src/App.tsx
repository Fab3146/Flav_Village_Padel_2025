import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PadelInfo from './pages/PadelInfo';
import GrisollesPadel from './pages/GrisollesPadel';
import QuoteRequest from './pages/QuoteRequest';
import AppFeatures from "./pages/HomePage/AppFeatures";
import CGU from './pages/CGU';
import CGV from './pages/CGV';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';

// Composant ScrollToTop
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Attendre que la page charge avant de scroller vers l'ancre
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Petit délai pour garantir que l'élément est bien là
    } else {
      // Si pas d'ancre, remonter en haut de la page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <PromoBar />
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          showQR={showQR} 
          setShowQR={setShowQR}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/padel-info" element={<PadelInfo />} />
            <Route path="/grisolles" element={<GrisollesPadel />} />
            <Route path="/demande-devis" element={<QuoteRequest />} />
            <Route path="/application" element={<AppFeatures />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/cgv" element={<CGV />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
