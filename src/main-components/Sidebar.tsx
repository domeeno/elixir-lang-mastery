import Email from '../components/Email'
import { Line } from '../components/Line'
import { SiteDescription } from '../components/SiteDescription'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-1/3 py-8 justify-between h-full bg-cream'>
      <Line />
      <div>
        <SiteDescription />
      </div>
      <Email />
    </div>
  )
}

export { Sidebar }
