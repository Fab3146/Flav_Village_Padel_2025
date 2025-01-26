import React, { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null); // Stocke les données météo
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [error, setError] = useState(null); // Stocke les erreurs éventuelles

  useEffect(() => {
    // Fonction pour récupérer les données météo depuis l'API Render
    const fetchWeatherFromCache = async () => {
      try {
        const response = await fetch('https://api-weather-xp2w.onrender.com/weather'); // Appelle l'API Render

        if (!response.ok) {
          throw new Error('Impossible de récupérer les données météo depuis l\'API.');
        }

        const data = await response.json();

        if (data.weather) {
          setWeatherData({
            ...data.weather,
            lastUpdated: data.lastUpdated,
          }); // Stocke les données récupérées
          setLoading(false); // Arrête le chargement
        } else {
          throw new Error('Données météo non disponibles.');
        }
      } catch (err) {
        setError(err.message); // Enregistre l'erreur
        setLoading(false);
      }
    };

    fetchWeatherFromCache(); // Appeler la fonction au chargement du composant
  }, []); // Le tableau vide signifie que cette fonction s'exécute une seule fois, au chargement

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-brand-orange" />
          Météo à Grisolles
        </h2>
        <div className="flex items-center justify-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-orange"></div>
        </div>
        <p>Chargement des données météo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-brand-orange" />
          Météo à Grisolles
        </h2>
        <p className="text-red-500">Erreur : {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-brand-orange text-white px-4 py-2 rounded-lg mt-4"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Sun className="text-brand-orange" />
        Météo à Grisolles
      </h2>

      {weatherData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <p><strong>Conditions actuelles</strong></p>
            <p>Température : {weatherData.main.temp}°C</p>
            <p>Ressentie : {weatherData.main.feels_like}°C</p>
            <p>Humidité : {weatherData.main.humidity}%</p>
            <p>Vent : {weatherData.wind.speed} m/s</p>
            <p>
              Description :{' '}
              {weatherData.weather[0].description.charAt(0).toUpperCase() +
                weatherData.weather[0].description.slice(1)}
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <p><strong>Dernière mise à jour</strong></p>
            <p>{new Date(weatherData.lastUpdated).toLocaleString('fr-FR')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;


