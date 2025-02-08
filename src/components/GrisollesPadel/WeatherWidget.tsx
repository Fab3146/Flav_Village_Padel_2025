import React, { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, Zap, CloudSnow, RefreshCw } from 'lucide-react';

const weatherBackgrounds = {
  "clear": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/ciel_bleu_nlicx0.webp",
  "partly-cloudy": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/eclairicie_ebcmqy.jpg",
  "cloudy": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014455/nuageux_qtiquu.jpg",
  "rainy": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/pluie_ntsg1s.jpg",
  "stormy": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/orage_qtxhlc.jpg",
  "snowy": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/pluie_ntsg1s.jpg", // Placeholder pour la neige
  "night": "https://res.cloudinary.com/damfvriyn/image/upload/v1739014272/Nuit_yoegdh.jpg"
};

const weatherIcons = {
  "clear": <Sun className="text-yellow-400 w-10 h-10" aria-label="Soleil" />,
  "partly-cloudy": <Cloud className="text-gray-400 w-10 h-10" aria-label="Éclaircie" />,
  "cloudy": <Cloud className="text-gray-500 w-10 h-10" aria-label="Nuageux" />,
  "rainy": <CloudRain className="text-blue-400 w-10 h-10" aria-label="Pluie" />,
  "stormy": <Zap className="text-purple-500 w-10 h-10" aria-label="Orage" />,
  "snowy": <CloudSnow className="text-blue-200 w-10 h-10" aria-label="Neige" />
};

// Fonction pour déterminer la condition météo
const getWeatherCondition = (description) => {
  const lowerDesc = description.toLowerCase();
  if (lowerDesc.includes("orage")) return "stormy";
  if (lowerDesc.includes("pluie")) return "rainy";
  if (lowerDesc.includes("neige")) return "snowy";
  if (lowerDesc.includes("nuageux")) return "cloudy";
  if (lowerDesc.includes("éclaircie")) return "partly-cloudy";
  return "clear"; // Par défaut
};

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
      }
    };
    fetchWeatherFromCache();
  }, []);

  if (loading) return <div className="w-80 h-80 bg-gray-200 animate-pulse rounded-xl"></div>;
  if (error) return <div className="w-80 h-80 bg-red-200 rounded-xl p-4">Erreur : {error}</div>;

  const { current, forecast } = weatherData;
  const condition = getWeatherCondition(current.description);
  const backgroundImage = weatherBackgrounds[condition];
  const weatherIcon = weatherIcons[condition] || <Cloud className="text-gray-400 w-10 h-10" aria-label="Météo inconnue" />;

  return (
    <div className="w-80 h-80 rounded-xl shadow-lg relative overflow-hidden text-white">
      <img src={backgroundImage} alt="Weather Background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-between">
        {/* Température actuelle */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">Météo à {current.name}</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            {weatherIcon}
            <span className="text-4xl font-bold">{current.temp}°C</span>
          </div>
          <p className="text-sm mt-1">{current.description}</p>
        </div>

        {/* Prévisions */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          {forecast.map((day) => (
            <div key={day.date} className="bg-white bg-opacity-20 p-2 rounded-md">
              <p className="font-semibold">{new Date(day.date).toLocaleDateString('fr-FR', { weekday: 'short' })}</p>
              <p>{day.temp}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;

