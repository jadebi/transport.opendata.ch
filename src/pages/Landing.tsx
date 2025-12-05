import { Button, Card, Divider } from '@heroui/react'
import { useState } from 'react'
import { SBB } from "../assets/icons"

function App() {
  let [count, setCount] = useState(0)
  function setFastCount(props: boolean) {

  }

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='w-min flex flex-col items-center'>
          <span className='text-5xl mt-2 mx-2'>
            <b>Stationboard</b>
          </span>
          {/* <Divider className='my-1' />
          <span className='text-black/50 dark:text-white/50'> test </span> */}
        </div>

        <Divider className='my-2' />

        <div className='w-full flex flex-col items-center'>
          <Button onPress={() => setCount(count + 1)} onPressStart={() => (setFastCount(true))}>
            {(count)}
          </Button>
          <div className='grid grid-cols-8 grid-flow-row'>
            {Array.from({ length: count }).map(() => (<Card className='border m-1 max-h-28 max-w-45'><SBB className='h-45 w-45 block' /></Card>))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
