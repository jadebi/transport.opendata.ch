import { useState, useEffect } from "react";
import type { Location, LocationResponse } from "../types";

const apiUrl = "https://transport.opendata.ch/v1/locations";

export function useQueryLocations(query: string) {
  const [items, setItems] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    async function load() {
      try {
        const result = await fetch(apiUrl + "?query=" + query);

        if (!result.ok) throw new Error("Request failed!");
        const { stations } = await result.json() as LocationResponse;

        setItems(stations?.filter((item): item is Location => item !== null && item.id !== null) ?? []);
      } catch (e) {
        setError(`${e}`);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [query]);

  return { items, loading, error };
}