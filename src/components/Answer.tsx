import React from 'react'

type Props = {
  isCorrect: boolean
  index: number
  text: string
}

const Answer = (props: Props) => {
  const indexing: {[key: number]: string} = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
};

  return (
    <div className='flex flex-row pt-4 items-center w-full cursor-pointer'>
      <div className='pr-2'>
        <div className='w-[20px] h-[20px] bg-cream border-2 border-cacao rounded-full text-center text-xs shadow-[-2px_-2px] shadow-cacao'>
          <h2 className='text-cacao'>{indexing[props.index]}</h2>
        </div>
      </div>
      <div className='border-2 border-cacao rounded-lg w-full shadow-[-2px_-2px] shadow-cacao'>
        <h2 className='p-4 text-cacao'>{props.text}</h2>
      </div>
    </div>
  )
}

export default Answer