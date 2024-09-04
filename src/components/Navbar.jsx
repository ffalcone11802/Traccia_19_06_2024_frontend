import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";


export default function Navbar() {
  return (
    <aside id="side-menu">
        <ul>
          <li><Link><i className="fa fa-solid"></i>Login</Link></li>
          <li><Link to=""><i className="fa fa-solid fa-home"></i>Home</Link></li>
          <SearchButton text="Cerca" icon="fa fa-solid fa-search"/>
          <li><Link to="library"><i className="fa fa-solid fa-book"></i>La tua libreria</Link></li>
          <li><Link><i className="fa fa-solid fa-plus"></i>Crea playlist</Link></li>
          <li><Link><i className="fa fa-solid fa-heart"></i>Brani preferiti</Link></li>
        </ul>
    </aside>
  )
}