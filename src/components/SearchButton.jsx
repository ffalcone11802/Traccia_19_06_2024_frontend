import { useState } from "react"
import {Link} from "react-router-dom"
import NavButton from "./NavButton"

export default function SearchButton({icon, text}) {
  const [hidden, setHidden] = useState(true)

  const handleHidden = () => {
    setHidden(!hidden)
  }

  return(
    <li>
      <Link id="search-button" onClick={handleHidden}><i className={icon}></i>{text}</Link>
      {!hidden && <NavButton />}
    </li>
  )
}