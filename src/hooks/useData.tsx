import { useState, useEffect } from "react";

function useData<T>(endpoint: string, params?: URLSearchParams, deps?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setLoading(true);
          let url = `https://api.rawg.io/api${endpoint}?key=${
            import.meta.env.VITE_API_KEY
          }`;
          if (params) {
            url = url + `&${params.toString()}`;
          }
          const response = await fetch(url);
          console.log(url);
          if (response.ok) {
            const data = await response.json();
            setData(data.results);
            setError(false);
          } else {
            setError(true);
          }
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error };
}

export default useData;
