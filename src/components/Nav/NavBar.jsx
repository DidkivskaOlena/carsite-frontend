import {  NavLink } from "react-router-dom";
import { Header, LangButton, LangContainer, LoginButtonStyled, Logo, LogoContainer, NavText, NavbarContainer } from "./NavBarCompStyle"
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useTranslation, Trans } from 'react-i18next';
import { ButtonModal, Modal, ModalText, NavbarLink } from "../Hero/HeroCompStyle";
import { useState } from "react";

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

    const [modal, setModal] = useState(false)

    const handleModalOpen = () => {
      setModal(true);
    };
    const handleModalClose = () => {
      setModal(false);
    };

    return(
      <NavbarContainer>
        <Header>
        <LogoContainer to="/">
          <Logo src="/logo.png"/>
        </LogoContainer>
        {/* <NavbarLink 
                  key="Contact"
                  to="/contacts"
                  exact="false">
                      <NavText>
                        {t(`menu.contact`)}
                      </NavText>
          </NavbarLink>
          <NavbarLink 
                  // key="FAQ"
                  // to="/faq"
                  // exact="false"
                  onClick={handleModalOpen}
                  >
                      <NavText>
                        {t(`menu.faq`)}
                      </NavText>
          </NavbarLink>
          <NavbarLink 
                  // key="Services"
                  // to="/services"
                  // exact="false"
                  onClick={handleModalOpen}
                  >
                      <NavText>
                        {t(`menu.services`)}
                      </NavText>
          </NavbarLink>
          <NavbarLink 
                  // key="Catalogue"
                  // to="/catalogue"
                  // exact="false"
                  onClick={handleModalOpen}
                  >
                      <NavText>
                        {t(`menu.catalogue`)}
                      </NavText>
          </NavbarLink> */}
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
            <LangButton key={lng} style={{ backgroundColor: i18n.resolvedLanguage === lng ? '#000000' : '#F5F5F5' , color: i18n.resolvedLanguage === lng ? '#FFFFFF' : '#000000' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </LangButton>
          ))}
        </LangContainer>
        </Header>
        {modal && (
        <Modal>
          <ModalText>{t(`modal.greetings`)}</ModalText>
          <ModalText>{t(`modal.conditions`)}</ModalText>
          <ModalText>{t(`modal.request`)}</ModalText>
            <ButtonModal onClick={handleModalClose}>{t(`modal.btn`)}</ButtonModal>
        </Modal>
      ) }
      </NavbarContainer>
    )
}

export default NavBar
