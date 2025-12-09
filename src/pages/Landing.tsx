import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function Landing() {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full flex flex-col items-center'>
          <span className='text-5xl mt-2 mx-2 mb-3'>
            <b>Welcome</b>
          </span>
          <span className="text-sm dark:text-white/70 text-black/70 mb-3 text-center">
            <p>This is a simple Demo Page to test the transport.opendata.ch public API.</p>
            <p>Source Code is available in my GitHub Repository.</p>
          </span>
          {/* <Divider className='my-1' />
          <span className='text-black/50 dark:text-white/50'> test </span> */}
        </div>

        {/* <Divider className='my-2' /> */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full px-4">
          <Card className="w-full sm:w-80 m-1.5 bg-linear-to-tr">
            <CardHeader className="text-2xl">
              Data
            </CardHeader>
            <Divider />
            <CardBody>
              <p>The data for this website is public available data from transport.opendata.ch</p>
            </CardBody>
          </Card>
          <Card className="w-full sm:w-80 m-1.5">
            <CardHeader className="text-2xl">
              Data
            </CardHeader>
            <Divider />
            <CardBody>
              <p>The data for this website is public available data from transport.opendata.ch</p>
            </CardBody>
          </Card>
          <Card className="w-full sm:w-80 m-1.5">
            <CardHeader className="text-2xl">
              Data
            </CardHeader>
            <Divider />
            <CardBody>
              <p>The data for this website is public available data from transport.opendata.ch</p>
            </CardBody>
          </Card>
        </div>

        <div className='w-full flex flex-col items-center'>

        </div>
      </div >
    </>
  )
}
