import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Découvrez le Padel</span>
                <span className="block text-brand-orange">avec Village Padel</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Village Padel démocratise le padel en zone rurale avec deux solutions clés : l’automatisation gratuite des pistes existantes et l’installation de nouvelles infrastructures, intégrées aux complexes sportifs comme les clubs de tennis. Grâce à notre application intuitive, réserver et jouer au padel devient simple et accessible !              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://apps.apple.com/fr/app/village-padel/id6504023084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark md:py-4 md:text-lg md:px-10"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    App Store
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://res.cloudinary.com/damfvriyn/image/upload/v1736002528/cjeyubfsyydtcdwkkxaw.jpg"
          alt="Terrain de padel"
        />
      </div>
    </div>
  );
};

export default Hero;
