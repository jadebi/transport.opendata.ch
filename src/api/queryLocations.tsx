import { useState, useEffect } from "react";

const apiUrl = "http://transport.opendata.ch/v1/locations";

export function useQueryLocations(query: string) {
  const [locs, setLocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function load() {
      try {
        const result = await fetch(apiUrl + "?query=" + query);

        if (!result.ok) throw new Error("Request failed!");
        const data = await result.json();

        setLocs(data?.stations?.filter((item: any) => item.id !== null));
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