import { useState, useEffect, useCallback } from "react";

export function useQueryStationboard(stationId: number, limit: number = 12) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!stationId) return;
    setLoading(true);
    setError(null);

    try {
      const apiUrl = "https://transport.opendata.ch/v1/stationboard";
      const Result = await fetch(apiUrl + "?id=" + stationId + "&type=departure" + "&limit=" + limit);
      if (!Result.ok) throw new Error(`HTTP ${Result.status}`);
      const data = await Result.json();

      setData(Array.isArray(data?.stationboard) ? data : []);
    } catch (Err: any) {
      setError(Err?.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [stationId, limit]);

  useEffect(() => {
    load();
    const id = window.setInterval(load, 2000); // 2000 is the automatic refresh delay in ms
    return () => clearInterval(id);
  }, [load]);

  return { items: data, loading, error, refresh: load };
}
