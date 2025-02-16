import React from "react";

const ConditionsGenerales: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <main className="pt-20 px-4 max-w-3xl mx-auto">
        <div className="bg-white text-black p-6 rounded-lg shadow-md">
          <h2 className="text-blue-900 text-2xl font-bold text-center">
            Conditions Générales d'Utilisation (CGU)
          </h2>

          <p className="mt-4">
            <strong>Village Padel</strong> est une marque déposée appartenant à la société Village Padel. 
            La Société Village Padel est enregistrée au registre du commerce et des sociétés de Toulouse 
            au numéro d’identification <strong>982174013</strong>, est une société par actions simplifiée 
            au capital de <strong>900€</strong>, ayant son siège social au 
            <strong> 2420 route de Canals, 31620 Fronton</strong>.
          </p>
          <p><strong>www.villagepadel.fr</strong> est le site officiel de la marque Village Padel.</p>
          <p><strong>Date de dernière mise à jour : 05/2024</strong></p>

          {/* ARTICLE 1 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 1 – PRINCIPES GÉNÉRAUX</h2>
          
          <h3 className="text-lg font-semibold mt-4">1.1 Champ d’application</h3>
          <p>
            Les présentes conditions générales d’utilisation (ci-après « CGU ») s'appliquent à toutes les 
            ventes et réservations effectuées via le site <strong>www.villagepadel.fr</strong> et l'application mobile 
            Village Padel édités par Village Padel avec un utilisateur inscrit sur le Site ou l'application (ci-après le « Client »).
          </p>

          <h3 className="text-lg font-semibold mt-4">1.2 Évolution</h3>
          <p>
            En cas de modification des présentes CGU, les nouvelles CGU deviennent applicables dès leur communication 
            au Client, sauf en cas d’obligation légale.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.3 Violation</h3>
          <p>
            Toute violation des présentes CGU autorise Village Padel à refuser de permettre au Client auteur 
            de la violation de bénéficier des Services délivrés sur le site et l'application.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.4 Preuve</h3>
          <p>
            Le Client reconnaît que les enregistrements et sauvegardes réalisés sur le Site et l'application 
            auront pleine valeur probante.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.5 Territoire</h3>
          <p>
            Le site internet et l'application mobile sont ouverts à tous les pays et territoires dans lesquels 
            Village Padel fournit ses Services.
          </p>

          {/* ARTICLE 2 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 2 - DÉFINITIONS</h2>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Centre d’affiliation :</strong> Désigne le centre Village Padel choisi par le Client.</li>
            <li><strong>Client :</strong> Toute personne physique majeure ou personne morale disposant d’un Compte Client.</li>
            <li><strong>Compte Client :</strong> Interface personnalisée permettant de gérer ses réservations et événements.</li>
            <li><strong>Site :</strong> Le site internet <strong>www.villagepadel.fr</strong>.</li>
            <li><strong>Application :</strong> L'application mobile Village Padel.</li>
            <li><strong>Utilisateur :</strong> Désigne tout visiteur ou client inscrit sur le Site ou l'Application.</li>
          </ul>

          {/* ARTICLE 3 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 3 - OBJET</h2>
          <p>
            Les présentes conditions régissent l’utilisation du site internet <strong>www.villagepadel.fr</strong> et de 
            l'application mobile Village Padel ainsi que les droits et obligations des Parties.
          </p>

          <h3 className="text-lg font-semibold mt-4">3.2 Acceptation de l’Utilisateur</h3>
          <p>
            L’utilisation des services implique l’acceptation pleine et entière des présentes CGU.
          </p>

          {/* ARTICLE 4 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 4 – CRÉATION D’UN COMPTE CLIENT</h2>
          <p>
            En se connectant à son Compte, le Client a accès à une interface lui permettant de gérer ses réservations,
            invitations, équipes et événements.
          </p>

          <h3 className="text-lg font-semibold mt-4">4.1 Suppression du compte client</h3>
          <p>
            Pour supprimer son compte, le Client doit accéder à "Mon Compte &gt; Mes Infos Persos &gt; Supprimer le compte".
          </p>

          {/* ARTICLE 5 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 5 – PROPRIÉTÉ INTELLECTUELLE</h2>
          <p>
            Le Site, l'Application et tout leur contenu sont protégés par le droit d'auteur et appartiennent à 
            Village Padel. Toute reproduction sans autorisation est interdite.
          </p>

          {/* ARTICLE 6 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 6 – DONNÉES PERSONNELLES</h2>
          <p>
            Les données personnelles collectées sont utilisées pour la gestion des réservations et l’amélioration 
            des services. Conformément à la loi « Informatique et Libertés », le Client peut demander la suppression 
            de ses données.
          </p>

          {/* ARTICLE 7 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 7 – ARCHIVAGE / PREUVE</h2>
          <p>
            Village Padel archive les commandes et factures sur un support sécurisé conforme aux exigences légales.
          </p>

          {/* ARTICLE 8 */}
          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 8 – DROIT APPLICABLE ET JURIDICTION COMPÉTENTE</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera 
            recherchée avant toute action judiciaire.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 text-center mt-6">
        <div className="flex justify-center gap-4">
          <a href="#" className="text-white hover:underline">Mentions légales</a>
          <a href="#" className="text-white hover:underline">Politique de confidentialité</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Village Padel. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default ConditionsGenerales;
