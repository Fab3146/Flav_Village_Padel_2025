import React, { useEffect, useState } from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = 'YOUR_API_KEY'; // Remplacez par votre clé API OpenWeatherMap

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Grisolles,France&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data.list);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  if (loading) {
    // ... votre composant de chargement (similaire à votre code actuel)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Sun className="text-brand-orange" />
        Météo à Grisolles (7 prochains jours)
      </h2>

      {weatherData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {weatherData.map((day, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <p><strong>{new Date(day.dt * 1000).toLocaleDateString()}</strong></p>
              <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
              <p>Température : {day.main.temp}°C</p>
              <p>Vent : {day.wind.speed} m/s</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
