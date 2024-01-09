import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

export function Nav() {
  return (
    <div className={style.nav}>
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
