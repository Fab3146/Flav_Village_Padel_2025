import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Clement P.",
    role: "Présidente de club de Grisolles ",
    image: "https://res.cloudinary.com/damfvriyn/image/upload/v1736192485/pexels-newman-photographs-234743505-30071289_qbxjui.jpg",
    text: "Une solution clé en main qui nous a permis de développer le padel sans investissement initial."
  },
  {
    name: "Stephane T.",
    role: "Bureau du Tennis club de Grisolles",
    image: "https://res.cloudinary.com/damfvriyn/image/upload/v1736192486/pexels-luiz-milczwski-1663966103-27868437_mpgawe.jpg",
    text: "L'automatisation a révolutionné notre gestion des terrains. Nos membres adorent la simplicité d'utilisation !"
  },
  {
    name: "Eric P.",
    role: "Joueur régulier",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "Réserver un terrain n'a jamais été aussi facile. L'application est vraiment intuitive."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Ils nous font confiance !</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
