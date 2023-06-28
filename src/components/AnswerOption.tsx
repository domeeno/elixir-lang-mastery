import { useState, useEffect } from 'react'

import { useGameModeContext } from '../context/GameModeContext'

type Props = {
  isCorrect: boolean
  answerId: number
  index: number
  text: string
  explanation: string
  handleAnswerClick: (answerId: number) => void
}

const AnswerOption = (props: Props) => {
  const gameData = useGameModeContext()

  const [answered, setAnswered] = useState<boolean>(false)
  const [highlight, setHighlight] = useState<string>("")
  const [clickedId, setClickedId] = useState<number>(-1)

  useEffect(() => {
    if (answered) {
      if (props.isCorrect) {
        setHighlight("bg-positive-green")
      } else {
        if (props.answerId === clickedId) {
          setHighlight("bg-negative-red")
        } else {
          setHighlight("bg-neutral-gray")
        }
      }
    }
    return () => {
      setHighlight("")
      setClickedId(-1)
    }
  }, [answered])

  useEffect(() => {
    setAnswered(gameData.answered)
  }, [gameData.answered])


  const indexing: { [key: number]: string } = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  };

  const handleAnswerClick = () => {
    if (answered) return

    setClickedId(props.answerId)
    setAnswered(true)
    setHighlight(props.isCorrect ? 'bg-positive-green' : 'bg-negative-red');

    props.handleAnswerClick(props.answerId)
  }

  return (
    <div className='flex flex-col w-full'>
      <div className={`flex flex-row pt-4 items-center w-full ${!answered && "cursor-pointer"}`} onClick={handleAnswerClick}>
        <div className='pr-2'>
          <div className={`w-[20px] h-[20px] shadow-[-2px_-2px] ${highlight} border-2 border-cacao rounded-full text-center text-xs shadow-cacao`}>
            <h2 className='text-cacao'>{indexing[props.index]}</h2>
          </div>
        </div>
        <div className={`border-2 border-cacao ${highlight} rounded-lg w-full shadow-[-2px_-2px] shadow-cacao`}>
          <h2 className='p-4 text-sm sm:test-base text-cacao'>{props.text}</h2>
        </div>
      </div>
      {answered && props.isCorrect && (
        <p className='text-cacao text-xs opacity-90 italic pl-8 py-2 text-left'>{props.explanation}</p>
      )}
    </div>
  )
}

export { AnswerOption }