import { useEffect, useState } from "react";
import { useQueryLocations } from "../../api/queryLocations";

interface LocCardsProps {
  query: string;
}

export default function RenderLocCards({ query }: LocCardsProps) {
  const [debouncedQuery, setDebouncedQuery] = useState<string>("")
  const [locs, loading] = useQueryLocations(debouncedQuery)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
      console.log(locs)
      console.log(loading)
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      {loading && <p>Lädt...</p>}
      {Array.isArray(locs) && locs?.stations?.map((loc) => (
        <div key={loc.id}>
          <p><strong>{loc.name}</strong></p>
          <p>{loc.id}</p>
        </div>
      ))}
    </>
  )
}