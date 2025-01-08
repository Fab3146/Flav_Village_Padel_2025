import React from 'react';

const CGU = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
          <p className="mb-6">
            Les présentes Conditions Générales d'Utilisation régissent l'utilisation de l'application Village Padel et des services associés.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Accès aux services</h2>
          <p className="mb-6">
            L'accès à l'application nécessite une inscription préalable. L'utilisateur s'engage à fournir des informations exactes.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Réservation</h2>
          <p className="mb-6">
            Les réservations sont soumises à disponibilité. Une réservation n'est confirmée qu'après paiement.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Annulation</h2>
          <p className="mb-6">
            Les annulations sont possibles jusqu'à 24h avant le créneau réservé. Au-delà, aucun remboursement n'est possible.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Responsabilité</h2>
          <p className="mb-6">
            Village Padel ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ses services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGU;