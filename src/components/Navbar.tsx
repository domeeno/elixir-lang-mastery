import { navbar } from "../contants"

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row">
        {
          navbar.map((item, index) => {
            return <li key={item.id} className={`text-cacao ${index !== 0 || index !== navbar.length ? "px-4" : ""}`}>
              <a target="_blank" rel="noopener noreferrer" href={item.url}>{item.text}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export { Navbar }