import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  emoji: string;
  question: string;
  answer: string;
  images?: string[];
  qrCode?: string;
  qrCodeLabel?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  emoji, 
  question, 
  answer, 
  images, 
  qrCode,
  qrCodeLabel 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 text-left flex items-start justify-between gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-bold text-lg text-gray-900">{question}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="flex-shrink-0 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pl-16 pr-4">
          <p className="text-gray-600 mb-4">{answer}</p>
          
          {images && images.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              ))}
            </div>
          )}
          
          {qrCode && (
            <div className="text-center">
              <img
                src={qrCode}
                alt={qrCodeLabel || "QR Code"}
                className="w-32 h-32 mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">{qrCodeLabel}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;