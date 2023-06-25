import { useState, useEffect } from "react"
import HexButton from "../components/HexButton"
import { useGameModeUpdate } from "../context/GameModeContext"
import { Questions, Question } from "../questions"
import Answer from "../components/Answer"
import { InGameElixirIcon } from "../asset-components/InGameElixirIcon"

const Quiz = () => {
  const randomQuestions = () => {
    const randomQuestions: Question[] = []
    randomQuestions.push(Questions[0])
    return randomQuestions
  }

  const toggleGameMode = useGameModeUpdate()

  const [questions, setQuestions] = useState<Question[]>(randomQuestions())
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    setQuestions(randomQuestions())
  }, [])

  return (
    <div className='flex flex-row w-full h-full justify-center items-center bg-cream'>
      <div className='flex flex-col justify-center items-center md:w-1/3 sm:w-1/2 p-12 sm:p-0 w-full bg-cream'>
        <div className="p-4">
          <InGameElixirIcon />
        </div>
        <div className="w-full border-2 border-cacao rounded-lg shadow-[-2px_-2px] shadow-cacao">
          <div className="flex flex-row justify-between items-center">
            <div onClick={toggleGameMode} className="m-4 text-cacao text-xs hover:cursor-pointer">
              <h3>{"< Back"}</h3>
            </div>
            <div className="p-4 text-cacao text-xs">
              <h3>{"Score 0/10"}</h3>
            </div>
          </div>
          <div className="">
            <p className="text-cacao p-4">{questions[questionIndex].question}</p>
            <h1 className="text-cacao text-xs p-4">Category: {questions[questionIndex].category.join(", ")}</h1>
          </div>
        </div>
        {
          questions[questionIndex].correctAnswers.map((answer, index) => {
            return <Answer key={answer.id} index={index} isCorrect={answer.correct} text={answer.text} />
          })
        }
        {
          questions[questionIndex].incorrectAnswers.map((answer, index) => {
            return <Answer key={answer.id} index={index} isCorrect={answer.correct} text={answer.text} />
          })
        }
      </div>
    </div>
  )
}

export { Quiz }