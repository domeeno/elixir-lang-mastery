import { text } from "../contants"
import { Elixir2PTIcon } from "../asset-components/Elixir2PTIcon"
import { Line } from "./Line"

const SiteDescription = () => {
  return (
    <div className='flex flex-col justify-end items-end'>
      <div className="flex flex-row items-center">
        <Elixir2PTIcon className='text-cacao w-[64px] opacity-90' />
        <h1 className="text-cacao whitespace-nowrap pl-6">Elixir Lang</h1>
      </div>
      <div className="py-8 w-3/4">
        <Line />
      </div>
      <p className="text-cacao text-sm w-3/4 text-right">
        {text.projectDescription.text0}
        <a target="_blank" rel="noopener noreferrer" href={text.projectDescription.linkUrl} className="text-cacao underline">{text.projectDescription.linkText}</a>
        {text.projectDescription.text1}
      </p>
    </div>
  )
}

export { SiteDescription }