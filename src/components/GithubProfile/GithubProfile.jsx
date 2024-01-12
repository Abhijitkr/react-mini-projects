import { useEffect, useState } from "react";
import GithubProfileInfo from "./GithubProfileInfo";
import "./github.css";

export default function GithubProfile() {
  const [username, setUsername] = useState("abhijitkr");
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubProfile() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (data) {
        setGitData(data);
        setUsername("");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubProfile();
  }

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (loading)
    return <div className="loading">Loading Profile! Please Wait...</div>;
  if (error) return <div className="error">Something went wrong: {error}</div>;

  return (
    <div className="github-container">
      <div className="github-control">
        <input
          type="text"
          placeholder="Enter github username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      {gitData ? <GithubProfileInfo user={gitData} /> : null}
    </div>
  );
}
