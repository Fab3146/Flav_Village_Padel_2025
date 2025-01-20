import React, { useEffect, useState } from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<any>(null);  // Déclaration plus générique
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);  // Gérer les erreurs d'appel API

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('http://localhost:3000/weather');  // URL du serveur local

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données météo');
        }

        const data = await response.json();

        if (data.success) {
          setWeatherData(data.data.current);  // Nous avons accès aux données actuelles ici
          setLoading(false);
        } else {
          setError('Données météo non disponibles');
          setLoading(false);
        }
      } catch (error: any) {
        setError(error.message);  // Afficher l'erreur si l'appel échoue
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-brand-orange" />
          Météo à Grisolles
        </h2>
        <p>Chargement...</p>  {/* Afficher un message de chargement */}
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
        <p className="text-red-500">{error}</p>  {/* Afficher un message d'erreur */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <p><strong>Conditions actuelles</strong></p>
            <img src={weatherData.weather_icons[0]} alt={weatherData.weather_descriptions[0]} />
            <p>Température : {weatherData.temperature}°C</p>
            <p>Ressentie : {weatherData.feelslike}°C</p>
            <p>Vent : {weatherData.wind_speed} m/s</p>
            <p>Humidité : {weatherData.humidity}%</p>
            <p>Pression : {weatherData.pressure} hPa</p>
            <p>Description : {weatherData.weather_descriptions[0]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
