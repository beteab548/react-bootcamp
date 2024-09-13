import { useEffect, useState } from "react";
function useFetch(fetchfn) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();
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
  }, [fetchfn]);
  return {
    isFetching,
    error,
    fetchedData,
  };
}
