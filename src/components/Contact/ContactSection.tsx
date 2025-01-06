import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
          <p className="text-lg text-gray-600 mb-12">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                <a 
                  href="tel:0749157401" 
                  className="text-gray-600 hover:text-brand-orange transition"
                >
                  07.49.15.74.01
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a 
                  href="mailto:contact@villagepadel.fr" 
                  className="text-gray-600 hover:text-brand-orange transition"
                >
                  contact@villagepadel.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

  );
};

export default ContactSection;
