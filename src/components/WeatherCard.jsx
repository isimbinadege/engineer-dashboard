import React, { useEffect, useState } from "react";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "56f05b02c28ea69e6c577305d35d0dc3"; 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );

          if (!res.ok) throw new Error(`Weather data not found: ${res.status}`);

          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied ❌");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p className="text-center text-gray-600">Fetching weather...</p>;
  if (error) return <p className="text-red-600 text-center">Error: {error}</p>;
  if (!weather) return null;

  const { name, main, weather: weatherInfo } = weather;

  const condition = weatherInfo[0].main;
  const icon = weatherInfo[0].icon;
  const temp = Math.round(main.temp);
  const description = weatherInfo[0].description;
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const message =
    condition.toLowerCase().includes("cloud")
      ? "☁️ It's a cloudy day."
      : condition.toLowerCase().includes("rain")
      ? "🌧️ Stay dry! It's raining."
      : condition.toLowerCase().includes("clear")
      ? "☀️ It's a bright sunny day!"
      : "🌈 Enjoy your day!";

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />

      <p className="text-4xl font-bold">{temp}°C</p>
      <p className="capitalize text-gray-500 dark:text-gray-300">{description}</p>
      <p className="mt-2 text-lg">{message}</p>
      <p className="mt-3 text-sm text-gray-400">🕒 {time}</p>
    </div>
  );
}
