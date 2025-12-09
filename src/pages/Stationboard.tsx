import { Card, Input } from "@heroui/react";
import { useState } from "react";
import LocCards from "../components/render/LocCards";

export default function Stationboard() {
  const [query, setQuery] = useState<string>("")

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <span className='text-5xl mt-2 mx-2 mb-3'>
          <b>Stationboard</b>
        </span>
        <span className="text-sm dark:text-white/70 text-black/70 mb-3 text-center">
          <p>Enter a Station name and see the Ariving and Departing Trains.</p>
        </span>
        {/* <Divider className='my-1' />
          <span className='text-black/50 dark:text-white/50'> test </span> */}
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] sm:w-[40%] flex flex-col items-center content-center justify-center">
          <div className="w-full">
            <Card>
              <Input label="Search Station" type="text" value={query} onValueChange={setQuery} />
            </Card>
          </div>
          <div>
            <LocCards query={query}/>
          </div>
        </div>
      </div>

    </>
  )
}