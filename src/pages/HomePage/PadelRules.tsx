import React from 'react';
import { Play } from 'lucide-react';

const PadelRules = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Découvrez les règles du padel en 5 minutes !</h2>
          <p className="text-gray-600 mb-8">
            Vous débutez dans le padel ? Cette vidéo vous explique tout ce que vous devez savoir 
            sur les règles et les bases du jeu. Idéal pour nos villageois novices !
          </p>
          
          <div className="relative aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/nmz6eI99_t8"
              title="Règles du Padel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PadelRules;
