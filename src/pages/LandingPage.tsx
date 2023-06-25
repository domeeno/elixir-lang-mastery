import { SiteInformationBar } from '../main-components/SiteInformationBar'
import { StartMenu } from '../main-components/StartMenu'
import { PersonalDetailsBar } from '../main-components/PersonalDetailsBar'
import { useGameMode } from '../context/GameModeContext'

const LandingPage = () => {
  const gameMode = useGameMode()

  return (
    <div className='flex flex-row justify-between items-center h-full'>
      {!gameMode &&
        <>
          <SiteInformationBar />
          <StartMenu />
          <PersonalDetailsBar />
        </>
      }
    </div>
  )
}

export { LandingPage }
