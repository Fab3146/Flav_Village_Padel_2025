import React from "react";

const CGV: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <header className="bg-blue-900 text-white flex items-center justify-between p-4 fixed w-full top-0 shadow-md z-10">
        <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/Olive06/village-padel/main/logo_old.png"
            alt="Village Padel Logo"
            className="h-12 mr-2"
          />
          <h1 className="text-xl">Village Padel</h1>
        </div>
      </header>

      <main className="p-6 pt-32 max-w-3xl mx-auto bg-white text-black rounded-lg shadow-lg">
        <h2 className="text-blue-900 text-2xl font-bold mb-4">
          Conditions Générales de Vente (CGV)
        </h2>
        <section>
          <h3 className="text-blue-900 font-bold">Préambule</h3>
          <p>
            Les présentes Conditions Générales de Vente (ci-après les "CGV")
            s'appliquent à toutes les réservations effectuées via le site{" "}
            <a href="https://villagepadel.fr" className="text-blue-900">
              villagepadel.fr
            </a>{" "}
            et l'application mobile "Village Padel". Elles définissent les
            droits et obligations des parties dans le cadre de la réservation
            de terrains de padel et des services associés.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">1. Objet</h3>
          <p>
            Ces CGV définissent les conditions pour toute personne physique ou
            morale (ci-après l' "Utilisateur") utilisant les services offerts
            par Village Padel.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">
            2. Acceptation des Conditions Générales de Vente
          </h3>
          <p>
            En utilisant le site ou l'application mobile, l'Utilisateur accepte
            sans réserve les présentes CGV.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">
            3. Inscription et Compte Utilisateur
          </h3>
          <ul className="list-disc ml-6">
            <li>
              L'Utilisateur doit créer un compte avec des informations exactes.
            </li>
            <li>Il est responsable de la confidentialité de ses identifiants.</li>
            <li>En cas de perte, il doit informer Village Padel.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">4. Services</h3>
          <p>Village Padel propose la réservation de terrains de padel et des abonnements.</p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">5. Tarifs</h3>
          <ul className="list-disc ml-6">
            <li>Les prix sont en euros, toutes taxes comprises.</li>
            <li>Les tarifs peuvent varier selon le type d'utilisateur.</li>
            <li>
              Village Padel se réserve le droit de modifier les prix, mais les
              réservations seront facturées selon les tarifs en vigueur lors de
              la validation.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">6. Réservations</h3>
          <ul className="list-disc ml-6">
            <li>Les réservations se font en ligne via le site ou l'application.</li>
            <li>Les membres du club de tennis bénéficient de tarifs préférentiels.</li>
            <li>
              Les réservations gratuites doivent être confirmées par tous les
              joueurs au moins 12h avant le créneau sous peine d'annulation.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">7. Paiement</h3>
          <ul className="list-disc ml-6">
            <li>Le paiement s'effectue via Stripe, une plateforme sécurisée.</li>
            <li>
              En utilisant Stripe, l'Utilisateur accepte ses{" "}
              <a
                href="https://stripe.com/fr/checkout/legal"
                className="text-blue-900"
              >
                conditions générales
              </a>
              .
            </li>
            <li>Une confirmation est envoyée après validation du paiement.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">8. Annulation et Modification</h3>
          <p>
            Les réservations peuvent être annulées ou modifiées sans frais
            jusqu'à 6 heures avant le créneau réservé. Passé ce délai, aucun
            remboursement ne sera effectué.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">9. Droit de rétractation</h3>
          <p>
            L'Utilisateur dispose d'un délai de 14 jours pour se rétracter, sauf
            pour les réservations à date ou créneau spécifique.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">10. Responsabilité</h3>
          <p>
            Village Padel ne peut être tenu responsable des dommages résultant
            d'une mauvaise utilisation des services.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">11. Données personnelles</h3>
          <p>
            Village Padel s'engage à protéger les données personnelles de ses
            utilisateurs conformément à la législation en vigueur.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">12. Propriété intellectuelle</h3>
          <p>
            Tous les éléments du site et de l'application restent la propriété
            de Village Padel.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">13. Force majeure</h3>
          <p>
            Village Padel ne sera pas responsable en cas d'inexécution due à un
            cas de force majeure.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">
            14. Modification des Conditions Générales de Vente
          </h3>
          <p>
            Village Padel peut modifier les CGV à tout moment. Les nouvelles CGV
            s'appliquent aux réservations futures.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">15. Droit applicable et litiges</h3>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de
            litige, une solution amiable sera recherchée avant de recourir aux
            tribunaux.
          </p>
        </section>

        <section>
          <h3 className="text-blue-900 font-bold">
            Annexe – Formulaire de rétractation
          </h3>
          <p>
            L'Utilisateur peut exercer son droit de rétractation en envoyant une
            lettre recommandée avec accusé de réception à Village Padel.
          </p>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4">
        <p>&copy; 2024 Village Padel. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default CGV;
  
