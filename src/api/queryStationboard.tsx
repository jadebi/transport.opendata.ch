import { useState, useEffect, useCallback } from "react";
import type { StationboardResponse, StationboardEntry } from "../types";

export function useQueryStationboard(stationId: number, limit: number = 12) {
  const [items, setItems] = useState<StationboardEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!stationId) return;
    setLoading(true);
    setError(null);

    try {
      const apiUrl = "https://transport.opendata.ch/v1/stationboard";
      const result = await fetch(apiUrl + "?id=" + stationId + "&type=departure" + "&limit=" + limit);
      if (!result.ok) throw new Error(`HTTP ${result.status}`);
      const { stationboard } = await result.json() as StationboardResponse;

      setItems(Array.isArray(stationboard) ? stationboard : []);
    } catch (Err) {
      setError(Err instanceof Error ? Err.message : `${Err}`);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [stationId, limit]);

  useEffect(() => {
    load();
    const id = window.setInterval(load, 2000);
    return () => clearInterval(id);
  }, [load]);

  return { items, loading, error, refresh: load };
}
