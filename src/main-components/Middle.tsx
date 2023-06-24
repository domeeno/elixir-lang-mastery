import { SemiEllipseIcon } from "../asset-components/SemiEllipseIcon"
import HexButton from "../components/HexButton"

const Middle = () => {
  return (
    <div className="flex flex-col sm:w-1/3 w-full pt-8 items-center justify-center h-full bg-cream">
      <div className="border-2 border-cream h-1/3" />
      <div className="h-1/3">
        <HexButton buttonText="START" />
      </div>
      <div className="h-1/3 w-full flex flex-col flex-grow items-center justify-end">
        <h2 className="text-xs text-cacao">MORE SKILLS</h2>
        <SemiEllipseIcon className="text-cacao" />
      </div>
    </div>
  )
}

export { Middle }