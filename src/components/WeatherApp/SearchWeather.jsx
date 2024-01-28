export default function SearchWeather({ search, setSearch, fetchWeather }) {
  function handleSearch(e) {
    e.preventDefault();
    fetchWeather(search);
  }

  return (
    <form className="flex gap-2 w-screen justify-center">
      <input
        type="text"
        placeholder="Enter City"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="py-2 px-4 rounded shadow w-80 focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-green-500 py-2 px-4 rounded shadow text-white"
      >
        Search
      </button>
    </form>
  );
}
