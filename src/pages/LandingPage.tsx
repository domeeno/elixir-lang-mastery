import { Sidebar } from '../main-components/Sidebar'
import { Middle } from '../main-components/Middle'
import { Rightbar } from '../main-components/Rightbar'

const LandingPage = () => {
  return (
    <div className='flex flex-row justify-between items-center h-full'>
      <Sidebar />
      <Middle />
      <Rightbar />
    </div>
  )
}

export { LandingPage }
