import {  NavLink } from "react-router-dom";
import { Header, LangButton, LangContainer, LoginButtonStyled, Logo, LogoContainer, MenuContainer, NavbarContainer, NavbarLink } from "./NavBarCompStyle"
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
  ru: { nativeName: 'RU' },
  de: { nativeName: 'DE' },
  nl: { nativeName: 'NL' }
};

function NavBar() {
    const {isLoggedIn} = useAuth()
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();

    return(
      <NavbarContainer>
        <Header>
        <LogoContainer to="/">
          <Logo src="/logo.svg"/>
        </LogoContainer>
      <MenuContainer >
        {/* <NavbarLink 
            key="About us"
            to="/about"
            exact="false">
            {t(`header.about`)}
        </NavbarLink>
        <NavbarLink 
            key="Services"
            to="/services"
            exact="false">
            {t(`header.services`)}
        </NavbarLink>
        <NavbarLink 
            key="Car catalogue"
            to="/catalogue"
            exact="false">
            {t(`header.catalogue`)}
        </NavbarLink>
        <NavbarLink 
            key="Favorites"
            to="/favorites"
            exact="false">
            {t(`header.favorites`)}
        </NavbarLink>
        <NavbarLink 
            key="FAQ"
            to="/faq"
            exact="false">
            {t(`header.faq`)}
        </NavbarLink>
        <NavbarLink 
            key="Contact us"
            to="/contacts"
            exact="false">
            {t(`header.contact`)}
        </NavbarLink> */}
      </MenuContainer>
      {/* {isLoggedIn? (
        <div>
          <LoginButtonStyled component={NavLink} to="/admin">
            Admin
        </LoginButtonStyled>
        <p>Welcome, ADMIN</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
      ) : (<LoginButtonStyled component={NavLink} to="/login">
            Login
        </LoginButtonStyled>) } */}
        <LangContainer>
          {Object.keys(lngs).map((lng) => (
            <LangButton key={lng} style={{ backgroundColor: i18n.resolvedLanguage === lng ? '#FFFFFF' : '#CCC9C3' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </LangButton>
          ))}
        </LangContainer>
        </Header>
      </NavbarContainer>
    )
}

export default NavBar
