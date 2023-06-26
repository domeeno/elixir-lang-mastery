import { createContext, useState, useEffect, useContext } from 'react';
import { Questions, Question } from '../questions';

export const GameMode = createContext(false);
export const GameModeUpdate = createContext(() => { });
export const GameModeContext = createContext({} as GameData);
export const GameModeContextUpdate = createContext((gameData: GameData) => { });

export const useGameMode = () => {
  return useContext(GameMode)
}

export const useGameModeUpdate = () => {
  return useContext(GameModeUpdate)
}

export const useGameModeContext = () => {
  return useContext(GameModeContext)
}

export const useGameModeContextUpdate = () => {
  return useContext(GameModeContextUpdate)
}

type Props = {
  children: React.ReactNode;
};

interface GameData {
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
    } else {
      localStorage.setItem('gameData', JSON.stringify(
        {
          questionIds: randomQuestions(),
          questionIndex: 0,
          answered: false,
          score: 0
        }
      ))
    }
  };

  const updateGameModeContext = (gameData: GameData) => {
    localStorage.setItem('questionIds', JSON.stringify(gameData));
    setGameModeContext(gameData)
  }

  useEffect(() => {
    JSON.parse(localStorage.getItem('gameMode') === "true") ? setGameMode(true) : setGameMode(false)

    const gameData = JSON.parse(localStorage.getItem('gameData') || '{}')

    setGameModeContext(gameData)
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
