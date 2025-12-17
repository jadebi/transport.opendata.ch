import { Card, CardBody, Divider } from "@heroui/react";

export function StationboardRows({ item }: { item: any }) {
  return (
    <>
      <Card className="w-full max-w-lg justify-self-center">
        <CardBody className="flex flex-col gap-3">
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
                : "Gleis "}
              {item.stop.platform ?? "?"}
            </span>
          </div>

          <Divider />

          <div className="flex flex-row text-sm justify-between">
            <div className="flex flex-row gap-1">
              {item.stop.delay
                ? (
                  <div className="text-red-500 flex flex-row gap-3">
                    <p className="font-medium line-through text-foreground">
                      {new Date(item.stop.departure).toLocaleTimeString("de-CH", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="font-medium">
                      {new Date(item.stop.prognosis.departure).toLocaleTimeString("de-CH", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                )
                : (
                  <div className="">
                    <p className="font-medium">
                      {new Date(item.stop.departure).toLocaleTimeString("de-CH", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                )}
            </div>
            <span className={
              item.stop.delay > 0
                ? "text-red-500 font-medium"
                : "text-green-500 font-medium"
            }>
              {item.stop.delay > 0
                ? `+${item.stop.delay} min`
                : "On Time"
              }
            </span>
          </div>
        </CardBody>
      </Card >
    </>
  )
}