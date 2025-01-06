import React from 'react';

const WhatsAppCommunity = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <img 
          src="https://res.cloudinary.com/damfvriyn/image/upload/v1736187620/whatsapp_cj9tzz.png" 
          alt="WhatsApp Logo" 
          className="w-8 h-8"
        />
        Rejoignez notre communauté WhatsApp
      </h2>

      <p className="mb-4">
        Recherchez des partenaires pour jouer au padel de Grisolles en rejoignant notre groupe WhatsApp dédié.
      </p>

      <div className="flex flex-col items-center">
        <img 
          src="https://res.cloudinary.com/damfvriyn/image/upload/v1736004008/QR_code_mnwacu.png" 
          alt="QR Code WhatsApp" 
          className="w-48 h-48 mb-4"
        />
        <a 
          href="https://chat.whatsapp.com/H69NBqjULMy9MrHJ6MDyTZ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition flex items-center gap-2"
        >
          <img 
            src="https://res.cloudinary.com/damfvriyn/image/upload/v1736187620/whatsapp_cj9tzz.png" 
            alt="WhatsApp Logo" 
            className="w-6 h-6"
          />
          Rejoindre depuis l'ordinateur
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCommunity;
