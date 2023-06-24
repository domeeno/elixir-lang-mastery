import React from 'react'
import { Line } from './Line'

const Email = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='w-full'>
        <Line />
      </div>
      <a className="text-xs px-6 font-extralight" href='mailto:dominicflocea.dev@gmail.com'>dominicflocea.dev@gmail.com</a>
      <div className='w-full'>
        <Line />
      </div>
    </div>
  )
}

export default Email