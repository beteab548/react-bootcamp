import { useEffect, useState } from "react";
export function useFetch(fetchfn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchfn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  return {
    isFetching,
    error,
    setFetchedData,
    fetchedData,
  };
}
