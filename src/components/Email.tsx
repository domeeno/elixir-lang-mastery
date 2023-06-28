import { personalInfo } from '../contants'
import { Line } from './Line'

const Email = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='w-full'>
        <Line />
      </div>
      <a target="_blank" rel="noopener noreferrer" className="text-xs text-cacao px-6 font-extralight" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      <div className='w-full'>
        <Line />
      </div>
    </div>
  )
}

export { Email }