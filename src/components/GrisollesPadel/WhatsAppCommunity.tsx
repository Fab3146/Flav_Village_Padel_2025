import React from 'react';

const WhatsAppSection = () => {
  return (
    <section id="whatsapp" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-green">
            Rejoignez notre groupe WhatsApp !
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Trouvez des partenaires de jeu et restez informé des actualités du Padel de Grisolles. 
            Rejoignez la communauté active des passionnés de padel près de chez vous !
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* QR Code Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/damfvriyn/image/upload/v1736004008/QR_code_mnwacu.png"
              alt="QR Code WhatsApp"
              className="w-64 h-64 mb-6"
            />
            <p className="text-gray-600 text-center">
              Scannez le QR code avec votre téléphone pour rejoindre directement le groupe.
            </p>
          </div>

          {/* Button Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-gray-600 mb-4 text-center">
              Ou rejoignez depuis votre ordinateur :
            </p>
            <a
              href="https://chat.whatsapp.com/H69NBqjULMy9MrHJ6MDyTZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              <img
                src="https://res.cloudinary.com/damfvriyn/image/upload/v1736187620/whatsapp_cj9tzz.png"
                alt="WhatsApp Logo"
                className="w-6 h-6 mr-3"
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

