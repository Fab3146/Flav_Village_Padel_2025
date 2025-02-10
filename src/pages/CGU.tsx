import React from "react";

const ConditionsGenerales: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <header className="bg-blue-900 text-white flex items-center p-4 shadow-md fixed w-full top-0 z-50 justify-between">
        <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/Olive06/village-padel/main/logo_old.png"
            alt="Village Padel Logo"
            className="h-12 mr-2"
          />
          <h1 className="text-xl">Village Padel</h1>
        </div>
      </header>

      <main className="pt-20 px-4 max-w-3xl mx-auto">
        <div className="bg-white text-black p-6 rounded-lg shadow-md">
          <h2 className="text-blue-900 text-2xl font-bold">Conditions Générales d'Utilisation (CGU)</h2>
          <p className="mt-4">
            <strong>Village Padel</strong> est une marque déposée appartenant à la société XYZ. La Société XYZ est enregistrée au
            registre du commerce et des sociétés de [Ville] au numéro d’identification [Numéro].
          </p>
          <p><strong>www.villagepadel.fr</strong> est le site officiel de la marque Village Padel.</p>
          <p><strong>Date de dernière mise à jour : [Date]</strong></p>

          <h2 className="text-blue-900 text-xl font-bold mt-6">ARTICLE 1 – PRINCIPES GÉNÉRAUX</h2>
          <h3 className="text-lg font-semibold mt-4">1.1 Champ d’application</h3>
          <p>
            Les présentes conditions générales d’utilisation (ci-après « CGU ») s'appliquent à toutes les ventes et
            réservations effectuées via le site www.villagepadel.fr et l'application mobile Village Padel.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.2 Évolution</h3>
          <p>
            En cas de modification des présentes CGU, les nouvelles CGU deviennent applicables dès leur communication au Client.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.3 Violation</h3>
          <p>
            Toute violation des présentes CGU autorise Village Padel à refuser de permettre, pour l’avenir, au Client auteur de
            la violation de bénéficier des Services.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.4 Preuve</h3>
          <p>
            Le Client reconnaît que les enregistrements et sauvegardes réalisés sur le Site et l'application auront pleine
            valeur probante.
          </p>

          <h3 className="text-lg font-semibold mt-4">1.5 Territoire</h3>
          <p>
            Le site internet et l'application mobile sont ouverts à tous les pays et territoires dans lesquels Village Padel
            fournit ses Services.
          </p>
        </div>
      </main>

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
