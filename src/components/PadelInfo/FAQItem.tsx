import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  emoji: string;
  question: string;
  answer: string;
  images?: string[];
  qrCode?: string;
  qrCodeLabel?: string;
  button?: {
    text: string;
    link: string;
  };
}

const FAQItem: React.FC<FAQItemProps> = ({
  emoji,
  question,
  answer,
  images = [],
  qrCode,
  qrCodeLabel = "QR Code",
  button,
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

          {/* Images Section */}
          {images.length > 0 && (
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

          {/* QR Code Section */}
          {qrCode && (
            <div className="text-center">
              <img
                src={qrCode}
                alt={qrCodeLabel}
                className="w-32 h-32 mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">{qrCodeLabel}</p>
            </div>
          )}

          {/* Button Section */}
          {button && (
            <div className="text-center">
              <a
                href={button.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
              >
                {button.text || "En savoir plus"}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
