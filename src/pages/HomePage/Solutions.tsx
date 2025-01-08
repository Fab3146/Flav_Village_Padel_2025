import React from 'react';
import { Key, Sun, Wrench, HandshakeIcon } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';

const automatisationImages = [
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736008896/IMG_2482_jajepj.jpg",
    alt: "Terrain de padel automatisé"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736008883/IMG_2457_nrymsw.jpg",
    alt: "matériels disponible"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736008882/IMG_2477_lmkxty.jpg",
    alt: "Installation de terrain"
  }
];
const constructionImages = [
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736010933/IMG_E2454_o1hvo7.jpg",
    alt: "Terrain de padel automatisé"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736011951/DJI_0182_e2bkfb.jpg",
    alt: "travaux"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736011951/DJI_0192_vhukji.jpg",
    alt: "Installation de terrain dans le complexe sportif"
  }
];
const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos solutions principales</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Solution 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Automatisation complète de terrains 
            </h3>
            <div className="mb-6">
              <ImageCarousel images={automatisationImages} />
            </div>
            <p className="text-gray-600 mb-6">
              Notre technologie rend vos terrains 100% autonomes. Grâce à l'application Village Padel, 
              les joueurs bénéficient de :
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Key className="text-brand-orange mr-2" />
                <span>Accès au terrain (porte déverrouillée via smartphone)</span>
              </li>
              <li className="flex items-center">
                <Sun className="text-brand-orange mr-2" />
                <span>Allumage automatique de l'éclairage</span>
              </li>
              <li className="flex items-center">
                <Wrench className="text-brand-orange mr-2" />
                <span>Accès aux raquettes et balles via une boîte sécurisée</span>
              </li>
            </ul>
            <Link 
              to="/#contact"
              className="mt-8 inline-block bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition"
            >
              En savoir plus sur l'automatisation
            </Link>
          </div>

          {/* Solution 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Construction et exploitation de pistes de padel  
            </h3>
            <div className="mb-6">
              <ImageCarousel images={constructionImages} />
            </div>
            <p className="text-gray-600 mb-6">
              Village Padel installe et exploite gratuitement un terrain de padel outdoor dans votre complexe sportif :
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Wrench className="text-brand-orange mr-2" />
                <span>Construction clé en main, sans frais pour le club</span>
              </li>
              <li className="flex items-center">
                <HandshakeIcon className="text-brand-orange mr-2" />
                <span>Gestion via un bail emphytéotique ou une convention d'occupation</span>
              </li>
              <li className="flex items-center">
                <Sun className="text-brand-orange mr-2" />
                <span>Maintenance et exploitation gérées par nos soins</span>
              </li>
            </ul>
            <Link 
              to="/grisolles"
              className="mt-8 inline-block bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition"
            >
              Voir un exemple de terrain installé
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
