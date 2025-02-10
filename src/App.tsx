import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PadelInfo from './pages/PadelInfo';
import GrisollesPadel from './pages/GrisollesPadel';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';
import CGU from './pages/HomePage/CGU';
import CGV from './pages/HomePage/CGV';

// Composant ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* Ajout ici pour fonctionner avec le Router */}
      <div className="min-h-screen bg-white flex flex-col">
        <PromoBar />
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          showQR={showQR} 
          setShowQR={setShowQR}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/padel-info" element={<PadelInfo />} />
            <Route path="/grisolles" element={<GrisollesPadel />} />
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

