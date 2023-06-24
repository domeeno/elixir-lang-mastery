import { HexagonFillIcon } from "../asset-components/HexagonFillIcon"
import { HexagonNoFillicon } from "../asset-components/HexagonNoFillicon"

interface ButtonProps {
  buttonText: String
}

const HexButton = (props: ButtonProps) => {
  return (
    <div className="relative inline-block">
      <HexagonFillIcon className="text-cacao" />
      <HexagonNoFillicon className="text-cream absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <h1 className="text-cream text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{props.buttonText}</h1>
    </div>
  )
}

export default HexButton