import { useEffect, useState } from "react";
import SearchWeather from "./SearchWeather";
import Weather from "./Weather";

export default function WeatherApp() {
  const [search, setSearch] = useState("Jamshedpur");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const api = import.meta.env.VITE_OPENWEATHER_API;
  const api = import.meta.env.VITE_VERCEL_ENV_OPENWEATHER_API;

  async function fetchWeather(search) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError(null);
      }
      setError(data.message);
      setSearch("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(search);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center my-10 gap-10">
      <h1 className="text-3xl font-bold text-white">Weather App Project</h1>
      <SearchWeather
        search={search}
        setSearch={setSearch}
        fetchWeather={fetchWeather}
      />
      <Weather weather={weather} loading={loading} error={error} />
    </main>
  );
}
