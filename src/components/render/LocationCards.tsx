import { useEffect } from "react";
import { useQueryLocations } from "../../api/queryLocations";
import { Card, CardBody, Tooltip } from "@heroui/react";
import { Bus, Heart, TrainFront } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RenderLocCards({ query }: { query: string }) {
  const [locs, loading] = useQueryLocations(query)
  const navigate = useNavigate();

  if (!Array.isArray(locs)) return (<p>Error: {locs}</p>)
  if (query) localStorage.setItem('query', query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(locs)
      console.log(loading)
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  if ((query) && (!loading) && (locs.length === 0)) {
    return <p>No Results</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {locs.map((loc) => (
        <Card key={loc.id} className="w-full max-w-md justify-self-center hover:bg-default-100" isPressable onPress={() => navigate(`/station/${loc?.id}`)}>
          <CardBody>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="min-w-0 flex-1 pr-1">
                <p className="text-xl truncate"><b>{loc.name}</b></p>
                <Tooltip content={
                  <div>
                    <p>X: <b>{loc.coordinate.x}</b></p>
                    <p>Y: <b>{loc.coordinate.y}</b></p>
                  </div>
                } delay={2000}>

                  <span className="text-sm text-foreground/60">ID: {loc.id}</span>
                </Tooltip>
              </div>
              <div className="flex flex-col">
                <p className="">{
                  (loc.icon)
                    ? (loc.icon == "bus"
                      ? <Bus size={40} />
                      : <TrainFront size={40} />)
                    : <div className="flex flex-row"><TrainFront size={40} /><Bus size={40} /></div>
                }</p>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  )
}
