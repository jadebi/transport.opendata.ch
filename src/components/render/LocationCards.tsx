import { useEffect } from "react";
import { useQueryLocations } from "../../api/queryLocations";
import { Button, Card, CardBody, Table, CardHeader, Divider, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { Bus, TrainFront } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function RenderLocCards({ query }: { query: string }) {
  const [locs, loading] = useQueryLocations(query)

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

  if ((!query) && (locs.length === 0)) {
    return <p></p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {locs.map((loc) => (
        <Card key={loc.id} className="w-full max-w-md justify-self-center">
          <CardHeader>
            <div className="w-full flex flex-row justify-between items-center">
              <p className="pl-4"><b>{loc.name}</b></p>
              <p className="pr-4">{
                (loc.icon) ? (loc.icon == "bus" ? <Bus /> : <TrainFront />) : <div className="flex flex-row"><TrainFront /><Bus /></div>
              }</p>
            </div>
          </CardHeader>

          <Divider />

          <CardBody>
            <div className="flex flex-row items-stretch">
              <div className="w-full mr-3 h-full">
                <Table hideHeader>
                  <TableHeader>
                    <TableColumn>VARIABLE</TableColumn>
                    <TableColumn>VALUE</TableColumn>
                  </TableHeader>

                  <TableBody>
                    <TableRow key="1">
                      <TableCell>ID: </TableCell>
                      <TableCell>{loc.id}</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>X: </TableCell>
                      <TableCell>{loc?.coordinate?.x}</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Y: </TableCell>
                      <TableCell>{loc?.coordinate?.y}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Button as={NavLink} to={`/station/${loc?.id}`} className="self-stretch" >
                Open
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  )
}
