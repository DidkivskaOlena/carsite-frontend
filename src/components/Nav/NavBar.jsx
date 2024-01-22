import {  NavLink } from "react-router-dom";
import { LoginButtonStyled, Logo, LogoContainer, MenuContainer, NavbarContainer, NavbarLink } from "./NavBarCompStyle"
import { useContext } from "react";
import authContext from "../../context/auth/context"

const links = [
  { path: "/about", label: "About us", exact: "false" },
  { path: "/services", label: "Services", exact: "false" },
  { path: "/catalogue", label: "Car catalogue", exact: "false" },
  { path: "/favorites", label: "Favorites", exact: "false" },
  { path: "/faq", label: "FAQ", exact: "false" },
  { path: "/contacts", label: "Contact us", exact: "false" },
];

function NavBar() {
  const {isLoggedIn, user, onLogIn, onLogOut} = useContext(authContext)

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
      {isLoggedIn? (
        <LoginButtonStyled component={NavLink} to = "/admin" user={user} onLogOut={onLogOut}>ADMIN</LoginButtonStyled>
      ) : (
        <LoginButtonStyled component={NavLink} to="/login" onClick={onLogIn}>
            Login
        </LoginButtonStyled>
      )}
      
      </NavbarContainer>
    )
}

export default NavBar
