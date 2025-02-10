import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Settings, FileText } from 'lucide-react';

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clubName: '',
    location: '',
    courtCount: '',
    isAutomated: 'non',
    currentProvider: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:Flavien.roguet@villagepadel.fr?subject=Demande de devis - ${formData.clubName}&body=Nom: ${formData.name}%0D%0A
Email: ${formData.email}%0D%0A
Téléphone: ${formData.phone}%0D%0A
Club: ${formData.clubName}%0D%0A
Localisation: ${formData.location}%0D%0A
Nombre de terrains: ${formData.courtCount}%0D%0A
Terrains automatisés: ${formData.isAutomated}%0D%0A
${formData.isAutomated === 'oui' ? `Fournisseur actuel: ${formData.currentProvider}%0D%0A` : ''}
Description du projet:%0D%0A${formData.description}`;

    window.location.href = mailtoLink;
    
    // Return to homepage after a short delay
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Demande de devis</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="text-brand-orange" />
                Informations de contact
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Club Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="text-brand-orange" />
                Informations du club
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du club *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.clubName}
                    onChange={(e) => setFormData({...formData, clubName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de terrains *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.courtCount}
                    onChange={(e) => setFormData({...formData, courtCount: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Automation Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="text-brand-orange" />
                État de l'automatisation
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vos terrains sont-ils déjà automatisés ? *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                    value={formData.isAutomated}
                    onChange={(e) => setFormData({...formData, isAutomated: e.target.value})}
                  >
                    <option value="non">Non</option>
                    <option value="oui">Oui</option>
                  </select>
                </div>
                
                {formData.isAutomated === 'oui' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fournisseur actuel
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                      value={formData.currentProvider}
                      onChange={(e) => setFormData({...formData, currentProvider: e.target.value})}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="text-brand-orange" />
                Description du projet
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Décrivez votre projet et vos besoins *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange text-white py-3 px-6 rounded-lg hover:bg-brand-orange-dark transition duration-300"
            >
              Envoyer la demande de devis
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;