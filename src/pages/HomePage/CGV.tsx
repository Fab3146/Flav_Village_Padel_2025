import React from 'react';

const CGV = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Préambule</h2>
          <p className="mb-6">
            Les présentes Conditions Générales de Vente (ci-après les "CGV") s'appliquent à toutes les réservations effectuées via le site internet villagepadel.fr et l'application mobile "Village Padel". Elles définissent les droits et obligations des parties dans le cadre de la réservation de terrains de padel et des services associés proposés par Village Padel.
          </p>

          <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
          <p className="mb-6">
            Les présentes CGV ont pour objet de définir les termes et conditions qui s’imposent à toute personne physique ou morale (ci-après l'"Utilisateur") utilisant les services offerts par Village Padel, incluant mais sans s'y limiter, la réservation de terrains de padel.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Acceptation des Conditions Générales de Vente</h2>
          <p className="mb-6">
            En utilisant le site internet ou l'application mobile et en passant commande, l'Utilisateur accepte sans réserve les présentes CGV. L'acceptation des CGV se fait lors de la validation de chaque réservation.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Inscription et Compte Utilisateur</h2>
          <ul className="mb-6 list-disc pl-6">
            <li>Pour bénéficier des services, l'Utilisateur doit créer un compte en fournissant des informations exactes et à jour.</li>
            <li>L'Utilisateur est responsable de la confidentialité de ses identifiants de connexion.</li>
            <li>En cas de perte ou de vol des identifiants, l'Utilisateur doit informer Village Padel dans les plus brefs délais.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">4. Services</h2>
          <p className="mb-6">
            Village Padel propose des services de réservation de terrains de padel et des abonnements pour accéder à ces terrains.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Tarifs</h2>
          <ul className="mb-6 list-disc pl-6">
            <li>Les prix des réservations et des abonnements sont indiqués en euros, toutes taxes comprises.</li>
            <li>Les tarifs peuvent varier en fonction de l'Utilisateur (clients externes, membres du club de tennis).</li>
            <li>Village Padel se réserve le droit de modifier les prix à tout moment, mais les réservations seront facturées sur la base des tarifs en vigueur au moment de la validation de la commande.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">6. Réservations</h2>
          <ul className="mb-6 list-disc pl-6">
            <li>Les réservations peuvent être effectuées via le site internet ou l'application mobile.</li>
            <li>Toute réservation vaut acceptation des prix et descriptions des services disponibles.</li>
            <li>
              Les membres du club de tennis peuvent bénéficier de tarifs préférentiels, voire gratuits en heures creuses, à condition que tous les joueurs confirment leur réservation via l'application.
            </li>
            <li>
              Les réservations gratuites doivent être confirmées par tous les participants au moins 12 heures avant le début de la réservation. Si tous les participants n'ont pas confirmé leur participation via l'application 12 heures avant le début de la réservation, celle-ci sera automatiquement annulée et ne pourra pas être réservée gratuitement.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">7. Paiement</h2>
          <p className="mb-6">
            Le paiement s'effectue en ligne par carte bancaire via Stripe, une plateforme sécurisée. Une fois le paiement validé, une confirmation est envoyée à l'Utilisateur par email.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Annulation et Modification</h2>
          <p className="mb-6">
            Les réservations peuvent être annulées ou modifiées sans frais jusqu'à 6 heures avant le créneau réservé. Passé ce délai, aucun remboursement ne sera effectué.
          </p>

          <h2 className="text-xl font-semibold mb-4">9. Droit de rétractation</h2>
          <p className="mb-6">
            Conformément au Code de la consommation, l'Utilisateur dispose d'un délai de 14 jours à compter de la date de la réservation pour exercer son droit de rétractation, à condition que le service n'ait pas été utilisé.
          </p>

          <h2 className="text-xl font-semibold mb-4">10. Responsabilité</h2>
          <p className="mb-6">
            Village Padel ne saurait être tenue pour responsable des dommages résultant d'une mauvaise utilisation des services réservés.
          </p>

          <h2 className="text-xl font-semibold mb-4">11. Données personnelles</h2>
          <p className="mb-6">
            Village Padel s'engage à protéger les données personnelles de ses Utilisateurs conformément à la réglementation en vigueur.
          </p>

          <h2 className="text-xl font-semibold mb-4">12. Propriété intellectuelle</h2>
          <p className="mb-6">
            Tous les éléments du site internet et de l'application mobile Village Padel sont et restent la propriété intellectuelle exclusive de Village Padel.
          </p>

          <h2 className="text-xl font-semibold mb-4">13. Force majeure</h2>
          <p className="mb-6">
            Village Padel ne sera pas responsable de l'inexécution totale ou partielle de ses obligations si cette inexécution est due à un événement constitutif de force majeure.
          </p>

          <h2 className="text-xl font-semibold mb-4">14. Modification des CGV</h2>
          <p className="mb-6">
            Village Padel se réserve le droit de modifier les présentes CGV à tout moment.
          </p>

          <h2 className="text-xl font-semibold mb-4">15. Droit applicable et litiges</h2>
          <p className="mb-6">
            Les présentes CGV sont soumises au droit français.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGV;
