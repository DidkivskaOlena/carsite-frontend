import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export function Header() {
  return (
    <div className={style.header}>
      <NavLink to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/256/21/21270.png"
          width={"50px"}
          height={"50px"}
        />
      </NavLink>

      <div>
        <NavLink to="/aboutUs">About us</NavLink>
      </div>
      <div>
        <NavLink to="/services">Services</NavLink>
      </div>
      <div>
        <NavLink to="/carCatalogue">Car catalogue</NavLink>
      </div>
      <div>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
      <div>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
      <div>
        <NavLink to="/contactUs">Contact us</NavLink>
      </div>
    </div>
  );
}
