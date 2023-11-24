import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}

function useFetch() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGames(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { games, error };
}

export default useFetch;
