import React from 'react';
import { Facebook, Instagram, Store, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-extrabold mb-4">Village Padel</h3>
            <p className="text-gray-300 font-medium">
              La solution innovante pour le développement du padel en France.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-extrabold mb-4">Contact</h3>
            <p className="text-gray-300 font-medium mb-2">
              Email: contact@villagepadel.fr
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chat.whatsapp.com/H69NBqjULMy9MrHJ6MDyTZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/village_padel/profilecard/?igsh=MXhyZnlxZHNhN2xkOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/share/14o9CsAvpU/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold mb-4">Télécharger</h3>
            <div className="space-y-2">
              <a 
                href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr" 
                className="text-gray-300 hover:text-white transition font-medium flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Store className="w-5 h-5" />
                Google Play
              </a>
              <a 
                href="https://apps.apple.com/fr/app/village-padel/id6504023084" 
                className="text-gray-300 hover:text-white transition font-medium flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Store className="w-5 h-5" />
                App Store
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold mb-4">Informations légales</h3>
            <div className="space-y-2">
           <a 
                href="https://fab3146.github.io/Flav_Village_Padel_2025/cgu.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition block font-medium"
              >
                CGU
              </a>
            <a 
                href="https://fab3146.github.io/Flav_Village_Padel_2025/cgv.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition block font-medium"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 font-medium">
          <p>&copy; {new Date().getFullYear()} Village Padel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
