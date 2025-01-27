import React, { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain } from "lucide-react"; // Ajoute des icônes personnalisées

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherFromCache = async () => {
      try {
        const response = await fetch(
          "https://api-weather-xp2w.onrender.com/weather"
        );

        if (!response.ok) {
          throw new Error("Impossible de récupérer les données météo.");
        }

        const data = await response.json();
        if (data.weather) {
          setWeatherData({
            ...data.weather,
            forecast: data.forecast, // Prévisions pour 3 jours
            lastUpdated: data.lastUpdated,
          });
          setLoading(false);
        } else {
          throw new Error("Données météo non disponibles.");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherFromCache();
  }, []);

  const renderIcon = (condition) => {
    // Fonction pour rendre une icône basée sur les conditions météo
    if (condition.includes("rain")) return <CloudRain className="text-blue-500" />;
    if (condition.includes("cloud")) return <Cloud className="text-gray-500" />;
    return <Sun className="text-yellow-500" />;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
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
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
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
    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {renderIcon(weatherData.weather[0].main.toLowerCase())}
        Météo à Grisolles
      </h2>

      {weatherData && (
        <div className="space-y-4">
          {/* Conditions actuelles */}
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-bold">Conditions actuelles</p>
            <p className="text-sm capitalize">
              {weatherData.weather[0].description}
            </p>
            <p>Température : {weatherData.main.temp}°C</p>
            <p>Ressentie : {weatherData.main.feels_like}°C</p>
            <p>Humidité : {weatherData.main.humidity}%</p>
            <p>Vent : {weatherData.wind.speed} m/s</p>
          </div>

          {/* Prévisions pour 3 jours */}
          <div>
            <p className="font-bold">Prévisions à 3 jours</p>
            <div className="space-y-2">
              {weatherData.forecast.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 rounded-lg p-2"
                >
                  <p className="text-sm font-bold">
                    {new Date(day.date).toLocaleDateString("fr-FR", {
                      weekday: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm capitalize">{day.condition}</p>
                  <div className="flex items-center gap-2">
                    <span>{renderIcon(day.condition.toLowerCase())}</span>
                    <span>{day.temp}°C</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;


