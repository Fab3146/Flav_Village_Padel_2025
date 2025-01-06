import React from 'react';

const LocationMap = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Localisation du Padel de Grisolles</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7057351691537!2d1.284948275666455!3d43.820462841597454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac03797fae2099%3A0xb0184e9f73d0075b!2sVillage%20Padel!5e0!3m2!1sfr!2sfr!4v1736013037261!5m2!1sfr!2sfr"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Padel de Grisolles"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
