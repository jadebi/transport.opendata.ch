import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Github, Mail } from "lucide-react";

export default function Landing() {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4">
        <div className="w-full flex flex-col items-center text-center mb-2">
          <span className="text-5xl mb-2"><b>Welcome</b></span>
          <p className="text-sm">
            This is a demo page for the transport.opendata.ch API.
          </p>
          <p className="text-sm text-foreground/60">
            All data is publicly available and this website shows how to fetch and display it dynamically.
          </p>
        </div>

        <Divider className="my-3" />

        <div className="w-full flex flex-col sm:flex-row gap-4 justify-items-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-2xl font-semibold">API Data</CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-2">
              <p>Real-time transport data fetched from the <a href="https://transport.opendata.ch" className="text-primary/70 hover:text-primary transition-colors">public API.</a></p>
              <p>Includes stations, departures, delays, and platform information.</p>
            </CardBody>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader className="text-2xl font-semibold">About Me</CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-3">
              <p>Created by Jannick Tobler as a demonstration project.</p>
              <p>If you have any questions, feel free to contact me or follow me on social media:</p>
              <div className="flex flex-row gap-4 mt-2">
                <a href="https://github.com/jadebi/" target="_blank" className="flex items-center gap-1 text-foreground hover:text-primary-500 transition-colors">
                  <Github size={20} /> GitHub
                </a>
                <a href="mailto:kleinermatick@gmail.com" className="flex items-center gap-1 text-foreground hover:text-primary-500 transition-colors">
                  <Mail size={20} /> Email
                </a>
              </div>
            </CardBody>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader className="text-2xl font-semibold">How to use</CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-2">
              <p>To see the Stationboard, you first have to select a station. You can do that by opening the "Search" page and searching for the station name.</p>
              <p>If you found your Station, click on open.</p>
            </CardBody>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader className="text-2xl font-semibold">Upcoming</CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-2">
              <p>I am planning to make a little playground to try out the API right here on the website.</p>
              <p>This feature is not certain yet and only an idea!</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
