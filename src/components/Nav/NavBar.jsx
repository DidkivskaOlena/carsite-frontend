import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.css"

function NavBar() {
    return(
        <div>
      <NavLink to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/256/21/21270.png"
          width={"50px"}
          height={"50px"}
          
        />
      </NavLink>
      <nav className={style.header}>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/catalogue">Car catalogue</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacts">Contact us</Link>
      </nav>
    </div>
    )
}

export default NavBar
