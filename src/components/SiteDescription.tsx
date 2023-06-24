import { text } from "../contants"
import { ElixirIcon } from "../asset-components/ElixirIcon"
import { Line } from "./Line"

const SiteDescription = () => {
  return (
    <div className='flex flex-col justify-end items-end'>
      <div className="flex flex-row items-center">
        <ElixirIcon className='text-cacao w-[64px]' />
        <h1 className="text-cacao whitespace-nowrap pl-6">Elixir Lang</h1>
      </div>
      <div className="py-8 w-3/4">
        <Line />
      </div>
      <p className="text-cacao text-sm w-3/4 text-right">
        {text.projectDescription.text0}
        <a href={text.projectDescription.linkUrl} className="text-cacao underline">{text.projectDescription.linkText}</a>
        {text.projectDescription.text1}
      </p>
    </div>
  )
}

export { SiteDescription }