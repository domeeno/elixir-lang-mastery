import { SocialsNavbar } from "../components/SocialsNavbar"
import { personalInfo } from "../contants"
import { SiBuymeacoffee } from "react-icons/si"

const PersonalDetailsBar = () => {
  return (
    <div className="sm:flex flex-col w-1/3 py-8 justify-between items-center h-full bg-cream hidden">
      <SocialsNavbar />
      <div className="flex flex-row items-center border-[1px] border-cacao rounded-lg p-2 opacity-30 hover:opacity-100">
        <a target="_blank" rel="noopener noreferrer" className="text-xs text-cacao px-4" href={personalInfo.buyMeACoffee.link}>{personalInfo.buyMeACoffee.text}</a>
        <SiBuymeacoffee className="text-cacao" size={32} />
      </div>
    </div>
  )
}

export { PersonalDetailsBar }