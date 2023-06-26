import { useEffect, useState } from "react"

import { useGameModeUpdate, useGameModeContext, useGameModeContextUpdate } from "../context/GameModeContext"
import { Questions, Question } from "../questions"
import { Answer } from "../components/Answer"
import { Code } from "../components/Code"
import { shuffleArrays } from "../utils"

import { InGameElixirIcon } from "../asset-components/InGameElixirIcon"

const Quiz = () => {
  const loadQuestions = (): Question[] => {
    const questions: Question[] = []
    gameData.questionIds.forEach((questionId) => {
      questions.push(Questions.find(question => question.id === questionId)!)
    })

    return questions
  }

  const toggleGameMode = useGameModeUpdate()

  const gameData = useGameModeContext()

  const [questions, setQuestions] = useState<Question[]>(loadQuestions())
  const [questionIndex, setQuestionIndex] = useState(gameData.questionIndex)

  const handleAnswerClick = (answerId: number, isCorrect: boolean) => {
    if (isCorrect) {
      console.log("correct")
      // setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
    } else {
      console.log("incorrect")
    }

    return answerId === questions[questionIndex].correctAnswers[0].id
  }

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
              <h3>{`Score ${gameData.score}/10`}</h3>
            </div>
          </div>
          <div>
            <p className="text-cacao p-4">{questions[questionIndex].question}</p>
            {questions[questionIndex].code &&
              <Code code={questions[questionIndex].code} />
            }
            <h1 className="text-cacao text-xs p-4">Category: {questions[questionIndex].category.join(", ")}</h1>
          </div>
        </div>
        <div className="py-4" />
        {
          shuffleArrays(questions[questionIndex].correctAnswers, questions[questionIndex].incorrectAnswers).map((answer, index) => {
            return <Answer key={answer.id} index={index} handleAnswerClick={handleAnswerClick} answerId={answer.id} isCorrect={answer.correct} text={answer.text} />
          })
        }
      </div>
    </div>
  )
}

export { Quiz }