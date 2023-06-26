import { useState } from "react";

type Props = {
  isCorrect: boolean
  answerId: number
  index: number
  text: string
  handleAnswerClick: (answerId: number, isCorrect: boolean) => boolean
}

const Answer = (props: Props) => {
  const [answered, setAnswered] = useState(false)
  const [highlightCorrect, setHighlightCorrect] = useState(false)

  const indexing: { [key: number]: string } = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  };

  const onAnswerClick = () => {
    setAnswered(true)
    setHighlightCorrect(props.handleAnswerClick(props.answerId, props.isCorrect))
  }

  return (
    <div className='flex flex-row pt-4 items-center w-full cursor-pointer' onClick={onAnswerClick}>
      <div className='pr-2'>
        <div className={`w-[20px] h-[20px] ${!answered ? "bg-cream" : highlightCorrect ? "bg-positive-green" : "bg-negative-red"} ${answered ? "" : "shadow-[-2px_-2px]"} border-2 border-cacao rounded-full text-center text-xs shadow-cacao`}>
          <h2 className='text-cacao'>{indexing[props.index]}</h2>
        </div>
      </div>
      <div className={`border-2 border-cacao ${!answered ? "bg-cream" : highlightCorrect ? "bg-positive-green" : "bg-negative-red"} rounded-lg w-full ${answered ? "" : "shadow-[-2px_-2px]"} shadow-cacao`}>
        <h2 className='p-4 text-sm sm:test-base text-cacao'>{props.text}</h2>
      </div>
    </div>
  )
}

export { Answer }