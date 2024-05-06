import { Header, LangButton, LangContainer, LoginButtonStyled, Logo, LogoContainer, NavText, NavbarContainer } from "./NavBarCompStyle"
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useTranslation, Trans } from 'react-i18next';
import { ButtonModal, Modal, ModalText, NavbarLink } from "../Hero/HeroCompStyle";
import { useEffect, useState } from "react";
import {useLocation } from "react-router-dom"


const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
  ru: { nativeName: 'RU' },
  de: { nativeName: 'DE' },
  nl: { nativeName: 'NL' }
};

const theme = {
  whole: "100%",
};

function NavBar() {
    const { t, i18n } = useTranslation();
    let location = useLocation();
    console.log(location);
    

    const [modal, setModal] = useState(false)
    const [page, setPage] = useState("/")

    const handleModalOpen = () => {
      setModal(true);
    };
    const handleModalClose = () => {
      setModal(false);
    };

    useEffect(()=> {
      setPage(location.pathname)
    }, [location.pathname], )

    return(
      <>
        {location.pathname === "/contacts" ?  
      <NavbarContainer>
       <Header theme={theme}>
        <LogoContainer to="/">
          <Logo src="/logo.png"/>
        </LogoContainer>
           <NavbarLink 
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
          </NavbarLink>
        <LangContainer>
          {Object.keys(lngs).map((lng) => (
            <LangButton key={lng} style={{ backgroundColor: i18n.resolvedLanguage === lng ? '#000000' : '#F5F5F5' , color: i18n.resolvedLanguage === lng ? '#FFFFFF' : '#000000', fontSize: "18px" }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </LangButton>
          ))}
        </LangContainer>
        </Header>
        </NavbarContainer>
         : 
         <NavbarContainer style={{borderBottom: "1px solid #000000"}}>
          <Header>
          <LogoContainer to="/">
            <Logo src="/logo.png"/>
          </LogoContainer>
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
      </NavbarContainer> }
      </>
    )
}

export default NavBar
