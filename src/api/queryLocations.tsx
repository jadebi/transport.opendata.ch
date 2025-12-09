import { useState, useEffect } from "react";

const apiUrl = "http://transport.opendata.ch/v1/locations";

export function useQueryLocations(query: string) {
  const [locs, setLocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setLocs([]);
      return;
    }

    setLoading(true);
    async function load() {
      try {
        const result = await fetch(apiUrl + "?query=" + query);
        const data = await result.json();
        setLocs(data);
      } catch (e) {
        setLocs([`${e}`]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [query]);

  return [locs, loading];
}