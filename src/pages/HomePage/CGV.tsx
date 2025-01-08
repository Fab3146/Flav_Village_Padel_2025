import React from 'react';

const CGV = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Prix</h2>
          <p className="mb-6">
            Les prix sont indiqués en euros TTC. Village Padel se réserve le droit de modifier ses prix à tout moment.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Paiement</h2>
          <p className="mb-6">
            Le paiement s'effectue en ligne via l'application. Les moyens de paiement acceptés sont : carte bancaire, Apple Pay et Google Pay.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Réservation</h2>
          <p className="mb-6">
            La réservation n'est effective qu'après confirmation du paiement. Un email de confirmation est envoyé.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Remboursement</h2>
          <p className="mb-6">
            En cas d'annulation dans les délais (24h avant), le remboursement est effectué sous 7 jours ouvrés.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Location de matériel</h2>
          <p className="mb-6">
            Le matériel loué doit être restitué dans l'état initial. Tout dommage sera facturé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGV;