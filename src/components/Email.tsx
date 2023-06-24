import { text } from '../contants'
import { Line } from './Line'

const Email = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='w-full'>
        <Line />
      </div>
      <a className="text-xs text-cacao px-6 font-extralight" href='mailto:dominicflocea.dev@gmail.com'>{text.personalInfo.email}</a>
      <div className='w-full'>
        <Line />
      </div>
    </div>
  )
}

export default Email