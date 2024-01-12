import { useEffect, useState } from "react";
import Users from "./Users";
import "./search.css";

export default function Searching() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleSearch(e) {
    const inputText = e.target.value;
    setSearchParams(inputText);
    const query = inputText.toLowerCase();
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : //  ? users.filter((user) => user.toLowerCase().includes(query))
            [];
      setFilterUsers(filterData);
      setShowDropdown(true);
    } else setShowDropdown(false);
  }

  function handleClick(e) {
    setSearchParams(e.target.innerText);
    setShowDropdown(false);
    setFilterUsers([]);
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users?limit=100");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) <div className="loading">Loading Please wait...</div>;
  if (error) <div className="error">Something went wrong: {error}</div>;

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search User..."
        onChange={handleSearch}
        value={searchParams}
      />
      {showDropdown ? (
        <Users users={filterUsers} handleClick={handleClick} />
      ) : null}
    </div>
  );
}
