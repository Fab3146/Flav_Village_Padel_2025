import React from 'react';

const WhatsAppSection = () => {
  return (
    <section id="whatsapp" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Rejoignez notre communauté WhatsApp !
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Trouvez des partenaires de jeu et restez informé des actualités du Padel de Grisolles 
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/damfvriyn/image/upload/v1736004008/QR_code_mnwacu.png"
              alt="QR Code WhatsApp"
              className="w-48 h-48 mb-4"
            />
            <p className="text-sm text-gray-500 text-center">
              Scannez le QR code avec votre téléphone
            </p>
          </div>

          {/* Join Button Section */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 text-center mb-4">
              Ou rejoignez depuis ici :
            </p>
            <a
              href="https://chat.whatsapp.com/H69NBqjULMy9MrHJ6MDyTZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
            >
              <img
                src="https://res.cloudinary.com/damfvriyn/image/upload/v1736187620/whatsapp_cj9tzz.png"
                alt="WhatsApp Logo"
                className="w-6 h-6 mr-2"
              />
              Rejoindre le groupe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;

