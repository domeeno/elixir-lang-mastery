import { createContext, useState, useEffect, useContext } from 'react';

export const GameMode = createContext(false);
export const GameModeUpdate = createContext(() => { });

export const useGameMode = () => {
  return useContext(GameMode)
}

export const useGameModeUpdate = () => {
  return useContext(GameModeUpdate)
}

type Props = {
  children: React.ReactNode;
};

export const GameModeProvider = (props: Props) => {
  const [gameMode, setGameMode] = useState(false);

  const toggleGameMode = () => {
    setGameMode(prevGameMode => !prevGameMode);
    localStorage.setItem('gameMode', JSON.stringify(!gameMode));
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem('gameMode') === "true") ? setGameMode(true) : setGameMode(false)
  }, [])
  

  return (
    <GameMode.Provider value={gameMode}>
      <GameModeUpdate.Provider value={toggleGameMode}>
        {props.children}
      </GameModeUpdate.Provider>
    </GameMode.Provider>
  )
};
