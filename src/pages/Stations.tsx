import { Divider, Input } from "@heroui/react";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import LocCards from "../components/render/LocationCards";

export default function Stations() {
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce(query, 300);

  return (
    <>
      <div className='w-full flex flex-col items-center mb-2'>
        <span className='text-5xl mx-2 mb-2'><b>Stationboard</b></span>
        <p className="text-sm dark:text-white/70 text-black/70 text-center">
          Enter a Station name and see the Arriving and Departing Trains.
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] sm:w-[40%] flex flex-col items-center content-center justify-center">
          <div className="w-full">
            <Input
              label="Search for a Station name"
              type="text"
              value={query}
              color="default"
              onValueChange={setQuery}
              classNames={{
                helperWrapper: "flex self-center",
                description: "text-sm",
              }}
            />
          </div>
        </div>

        <Divider className="my-3" />

        <div className="w-full px-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <LocCards query={debouncedQuery} />
        </div>
      </div>
    </>
  )
}