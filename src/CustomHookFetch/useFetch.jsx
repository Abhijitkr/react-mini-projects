import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
