import { GameModeProvider } from "./context/GameModeContext"
import { LandingPage } from "./pages/LandingPage"

const App = () => {

  return (
    <GameModeProvider>
      <LandingPage />
    </GameModeProvider>
  )
}

export default App
