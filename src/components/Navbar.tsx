import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, QrCode } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  showQR: boolean;
  setShowQR: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  showQR, 
  setShowQR
}) => {
  const location = useLocation();

  const handleSolutionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#solutions';
    } else {
      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Notre Solution', to: '/#solutions', onClick: handleSolutionClick },
  { label: 'Tout sur le Padel', to: '/padel-info' },
  { label: 'Padel de Grisolles', to: '/grisolles' },
  { label: 'Contact', to: '/#contact', onClick: handleContactClick },
];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/ba35cf00af8d0e1b03a91f11e3978f56aa7e02a0/-Village_Padel_LOGO_LOLA_Bon__1_sansfond.qpng.png"
                alt="Village Padel Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-extrabold text-brand-blue ml-2">
                Village Padel
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={item.onClick}
                className="text-gray-700 hover:text-brand-orange transition font-bold"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setShowQR(!showQR)}
              className="bg-brand-orange text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-brand-orange-dark transition font-bold"
            >
              <QrCode size={20} />
              <span>Télécharger l'app</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={item.onClick}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange transition font-bold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showQR && (
        <div className="absolute right-4 top-20 bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/34fdcfcf245808e7550b09e48b6f01a664afee9e/qrcode_App_VP.png"
            alt="QR Code Village Padel"
            className="w-32 h-32"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
