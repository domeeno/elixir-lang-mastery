import { useEffect, useState } from "react"

import { useGameModeUpdate, useGameModeContext, useGameModeContextUpdate } from "../context/GameModeContext"
import { Questions } from "../questions"
import { Question, Answer, GameData } from "../models"
import { AnswerOption } from "../components/AnswerOption"
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
  const setGameData = useGameModeContextUpdate({} as GameData)

  const [questions, setQuestions] = useState<Question[]>(loadQuestions())
  const [questionIndex, setQuestionIndex] = useState(gameData.questionIndex)
  const [answered, setAnswered] = useState(gameData.answered)
  const [score, setScore] = useState(gameData.score)
  const [answersOptions, setAnswersOptions] = useState<Answer[]>([])

  useEffect(() => {
    setAnswersOptions(shuffleArrays(questions[questionIndex].correctAnswers, questions[questionIndex].incorrectAnswers))
  }, [questionIndex])

  const handleAnswerClick = (answerId: number) => {
    if (answerId === questions[questionIndex].correctAnswers[0].id) {
      setScore(prevScore => prevScore + 1)
      setAnswered(true)
    } else {
      setAnswered(true)
    }

    setGameData({
      questionIds: gameData.questionIds,
      questionIndex: gameData.questionIndex,
      answered: true,
      score: gameData.score + 1
    })
  }

  const handleNextQuestion = () => {
    setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
    setAnswered(false)

    setGameData({
      questionIds: gameData.questionIds,
      questionIndex: gameData.questionIndex + 1,
      answered: false,
      score: gameData.score
    })
  }

  return (
    <div className='flex flex-row w-full h-full justify-center items-center bg-cream'>
      <div className='flex flex-col justify-center items-center md:w-1/3 sm:w-1/2 p-8 sm:p-0 w-full bg-cream'>
        <div className="p-4">
          <InGameElixirIcon />
        </div>
        <div className="w-full border-2 border-cacao rounded-lg shadow-[-2px_-2px] shadow-cacao">
          <div className="flex flex-row justify-between items-center">
            <div onClick={toggleGameMode} className="m-4 text-cacao text-xs hover:cursor-pointer">
              <h3>{"< Back"}</h3>
            </div>
            <div className="p-4 text-cacao text-xs">
              <h3>{`Score ${score}/10`}</h3>
            </div>
          </div>
          <div>
            <p className="text-cacao p-4">{questions[questionIndex].question}</p>
            {questions[questionIndex].code &&
              <Code code={questions[questionIndex].code!} />
            }
            <div className="flex flex-row">
              <h3 className="flex-grow text-cacao text-xs p-4">Category: {questions[questionIndex].category.join(", ")}</h3>
              <div className="flex flex-row items-center p-4">
                <h3 className="text-cacao text-xs mr-1">Difficulty: </h3>
                {
                  [1, 2, 3].map( (difficulty) => {
                    return <div key={difficulty} className={`rounded-full mx-1 w-[8px] h-[8px]  ${questions[questionIndex].difficulty >= difficulty ? "bg-cacao" : "bg-neutral-gray" }`}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="py-2" />
        {
          answersOptions &&
          answersOptions.map((answer, index) => {
            return <AnswerOption handleAnswerClick={handleAnswerClick} key={answer.id} index={index} answerId={answer.id} explanation={questions[questionIndex].explanation} isCorrect={answer.correct} text={answer.text} />
          })
        }
        {
          answered ?
            <div className="rounded-lg my-4 bg-cacao border-2 border-cream shadow-[-2px_-2px] shadow-cacao">
              <button onClick={handleNextQuestion} className="p-4 text-cream text-sm">{"Next Question >"}</button>
            </div>
            :
            <div className="my-4 bg-cream">
              <div className="p-4 text-cream">{"-"}</div>
            </div>
        }
      </div>
    </div>
  )
}

export { Quiz }