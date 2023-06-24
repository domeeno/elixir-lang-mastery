import { Sidebar } from '../main-components/Sidebar'
import { Middle } from '../main-components/Middle'
import { Leftbar } from '../main-components/Leftbar'

const LandingPage = () => {
  return (
    <div className='flex flex-row justify-between items-center h-full'>
      <Sidebar />
      <Middle />
      <Leftbar />
    </div>
  )
}

export { LandingPage }
