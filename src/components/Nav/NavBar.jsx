import { Link, NavLink } from "react-router-dom";
import { Logo, LogoContainer, MenuContainer, NavbarContainer, NavbarLink } from "./NavBarCompStyle"

const links = [
  { path: "/about", label: "About us", exact: "false" },
  { path: "/services", label: "Services", exact: "false" },
  { path: "/catalogue", label: "Car catalogue", exact: "false" },
  { path: "/favorites", label: "Favorites", exact: "false" },
  { path: "/faq", label: "FAQ", exact: "false" },
  { path: "/contacts", label: "Contact us", exact: "false" },
];

function NavBar() {
    return(
      <NavbarContainer>
        <LogoContainer to="/">
          <Logo src="/logo1.png"/>
          <Logo src="/logo.png"/>
        </LogoContainer>
      <MenuContainer >
        {links.map(({path, label, exact}) => (
          <NavbarLink 
            key={label}
            to={path}
            exact={exact}>
            {label}
          </NavbarLink>
        ))}
      </MenuContainer>
    
      </NavbarContainer>
    )
}

export default NavBar
