import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from './faqData';

const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              emoji={item.emoji}
              question={item.question}
              answer={item.answer}
              images={item.images}
              qrCode={item.qrCode}
              qrCodeLabel={item.qrCodeLabel}
              button={item.button} // Ajout ici pour transmettre le bouton
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
