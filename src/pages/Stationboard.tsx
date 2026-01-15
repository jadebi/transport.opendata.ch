import { useNavigate, useParams } from "react-router-dom";
import { useQueryStationboard } from "../api/queryStationboard";
import { Button, Divider } from "@heroui/react";
import StationboardRows from "../components/render/StationboardRows";

export default function Stationboard() {
  const navigate = useNavigate();
  const { stationId } = useParams<{ stationId: string }>();
  const { items: data, loading, error, refresh } = useQueryStationboard(Number(stationId))

  console.log("----------")
  console.log(data)
  console.log(loading)
  console.log(error)

  return (
    <>
      <div className="my-3 px-3 flex flex-row gap-3 items-center">
        <Button onPress={() => navigate(-1)}>Go back</Button>
        <Button onPress={refresh}>Refresh</Button>
        <span className="text-center text-foreground/20">{loading ? "Refreshing..." : ""}</span>
      </div>

      <Divider className="my-3" />

      <div className="w-full flex-col items-center px-4 grid grid-cols-1">
        {!error
          ? (<StationboardRows data={data} />)
          : (<p>Error: {error}</p>)
        }
      </div>
    </>
  )
}
