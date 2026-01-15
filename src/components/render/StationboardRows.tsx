export default function StationboardRows({ data }: { data: any[] }) {
  return (
    <>
      {(data as any).stationboard?.map((item: any) => (
        <div className="w-full max-w-lg mx-auto rounded-xl border border-divider bg-content1 px-4 py-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">
                {item.category}{item.number}
              </span>

              <span className="text-sm text-foreground/70">
                to {item.to}
              </span>
            </div>

            <span className="text-sm">
              {item.stop.platform
                ? /^[0-9/]+$/.test(item.stop.platform)
                  ? "Gleis "
                  : "Kante "
                : ""}
              {item.stop.platform ?? ""}
            </span>
          </div>

          <div className="flex flex-row text-sm justify-between">
            <div className="flex flex-row gap-1">
              {item.stop.delay
                ? (
                  <div className="text-red-500 flex flex-row gap-1">
                    <p className="font-medium line-through text-foreground">
                      {new Date(item.stop.departure).toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    <p className="font-medium">
                      {new Date(item.stop.prognosis.departure).toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                )
                : (
                  <div>
                    <p className="font-medium">
                      {new Date(item.stop.departure).toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit", })}
                    </p>
                  </div>
                )}
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${(item.stop.delay > 0) ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"}`}>
              {(item.stop.delay > 0) ? `+${item.stop.delay} min` : "On Time"}
            </span>
          </div>
        </div>
      ))}
    </>
  )
}