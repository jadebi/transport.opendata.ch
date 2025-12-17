import { useNavigate, useParams } from "react-router-dom";
import { useQueryStationboard } from "../api/queryStationboard";
import { Button, Divider } from "@heroui/react";
import { StationboardRows } from "../components/render/StationboardRows";

export default function Stationboard() {
  const navigate = useNavigate();
  const { stationId } = useParams<{ stationId: string }>();
  const { items: data, loading, error, refresh } = useQueryStationboard(Number(stationId))


  return (
    <>
      <div className="my-3 px-3 flex flex-row gap-3 items-center">
        <Button onPress={() => navigate(-1)}>Go back</Button>
        <Button onPress={refresh}>Refresh</Button>
        <span className="text-center">{loading ?? ("Refreshing...")}</span>
      </div>

      <Divider className="my-3" />

      <div className="w-full flex flex-col items-center">

        <div className="w-full px-4 grid grid-cols-1">
          {!error && (data as any).stationboard?.map((item: any) => (
            <StationboardRows key={item.id} item={item} />
          ))}
          {error && <p>ERROR: {error}</p>}

        </div>
      </div>
    </>
  )
}