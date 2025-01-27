import React, { useEffect, useState } from 'react';
import { Sun, RefreshCw } from 'lucide-react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherFromCache = async () => {
      try {
        const response = await fetch('https://api-weather-xp2w.onrender.com/weather');

        if (!response.ok) {
          throw new Error("Impossible de récupérer les données météo depuis l'API.");
        }

        const data = await response.json();

        if (data.weather) {
          setWeatherData({
            ...data.weather,
            lastUpdated: data.lastUpdated,
          });
          setLoading(false);
        } else {
          throw new Error('Données météo non disponibles.');
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherFromCache();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg shadow-lg p-6 animate-pulse">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-white" />
          Météo à Grisolles
        </h2>
        <div className="flex items-center justify-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-white"></div>
        </div>
        <p className="text-center mt-4">Chargement des données météo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-500">
          <Sun className="text-red-500" />
          Météo à Grisolles
        </h2>
        <p className="text-gray-700">Erreur : {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-4 transition-all"
        >
          Réessayer
        </button>
      </div>
    );
  }

  const { current, forecast } = weatherData;

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-2 mb-6">
        <Sun className="text-orange-500" />
        Météo à Grisolles
      </h2>

      {/* Conditions actuelles */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">Conditions actuelles</h3>
        <div className="flex items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt="Icône météo"
            className="w-16 h-16"
          />
          <div>
            <p className="text-lg font-semibold">{current.weather[0].description}</p>
            <p>Température : <span className="font-bold">{current.main.temp}°C</span></p>
            <p>Ressenti : {current.main.feels_like}°C</p>
            <p>Humidité : {current.main.humidity}%</p>
            <p>Vent : {current.wind.speed} m/s</p>
          </div>
        </div>
      </div>

      {/* Prévisions pour les 3 prochains jours */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Prévisions à 3 jours</h3>
        <div className="grid grid-cols-1 gap-4">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-lg shadow p-4"
            >
              <div>
                <p className="text-lg font-bold">{new Date(day.dt_txt).toLocaleDateString()}</p>
                <p className="text-gray-700">{day.weather[0].description}</p>
                <p>Température : {day.main.temp}°C</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="Icône météo"
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dernière mise à jour */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        Dernière mise à jour : {new Date(weatherData.lastUpdated).toLocaleString('fr-FR')}
      </div>
    </div>
  );
};

export default WeatherWidget;


