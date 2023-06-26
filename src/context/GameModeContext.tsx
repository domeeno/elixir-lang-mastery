import { createContext, useState, useEffect, useContext } from 'react';
import { Questions } from '../questions';

export const GameMode = createContext(false);
export const GameModeUpdate = createContext(() => { });
export const GameModeContext = createContext({} as GameData);
export const GameModeContextUpdate = createContext(() => { });

export const useGameMode = () => {
  return useContext(GameMode)
}

export const useGameModeUpdate = () => {
  return useContext(GameModeUpdate)
}

export const useGameModeContext = () => {
  return useContext(GameModeContext)
}

export const useGameModeContextUpdate = (gameData: GameData) => {
  return useContext(GameModeContextUpdate)
}

type Props = {
  children: React.ReactNode;
};

export interface GameData {
  questionIds: string[];
  questionIndex: number;
  answered: boolean;
  score: number;
}

const randomQuestions = () => {
  const randomQuestions: string[] = []
  const randomNumbers: number[] = []
  while (randomQuestions.length < Questions.length) {
    const randomNumber = Math.floor(Math.random() * Questions.length)
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber)
      randomQuestions.push(Questions[randomNumber].id)
    }
  }
  return randomQuestions
}

export const GameModeProvider = (props: Props) => {
  const [gameMode, setGameMode] = useState(false);
  const [gameModeContext, setGameModeContext] = useState({} as GameData);

  const toggleGameMode = () => {
    setGameMode(prevGameMode => !prevGameMode);
    localStorage.setItem('gameMode', JSON.stringify(!gameMode));
    if (gameMode) {
      localStorage.removeItem('gameData');
      setGameModeContext({} as GameData);
    } else {
      const initGameData = {
        questionIds: randomQuestions(),
        questionIndex: 0,
        answered: false,
        score: 0
      }
      localStorage.setItem('gameData', JSON.stringify(
        initGameData
      ))
      setGameModeContext(initGameData)
    }
  };

  const updateGameModeContext = (gameData: GameData) => {
    console.log("updateGameModeContext", gameData)
    localStorage.setItem('gameData', JSON.stringify(gameData));
    setGameModeContext(gameData)
  }

  useEffect(() => {
    JSON.parse(localStorage.getItem('gameMode') === "true") ? setGameMode(true) : setGameMode(false)

    let gameData = JSON.parse(localStorage.getItem('gameData') || "{}")

    if (gameData.questionIds === undefined) {
      gameData = {
        questionIds: randomQuestions(),
        questionIndex: 0,
        answered: false,
        score: 0
      }
    }

    setGameModeContext(gameData)

    localStorage.setItem('gameData', JSON.stringify(gameData));
  }, [])


  return (
    <GameMode.Provider value={gameMode}>
      <GameModeUpdate.Provider value={toggleGameMode}>
        <GameModeContext.Provider value={gameModeContext}>
          <GameModeContextUpdate.Provider value={updateGameModeContext}>
            {props.children}
          </GameModeContextUpdate.Provider>
        </GameModeContext.Provider>
      </GameModeUpdate.Provider>
    </GameMode.Provider>
  )
};
