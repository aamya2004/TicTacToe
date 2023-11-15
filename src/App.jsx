import React from 'react'
import Boxes from './components/boxes'

const App = () => {
  return (
    <div className='h-[500px] w-[500px] bg-black m-10 grid grid-cols-3 grid-rows-3 text-white'>
      <Boxes />
    </div>
  )
}

export default App