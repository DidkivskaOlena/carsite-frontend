import { useState } from "react";
import { Header, LangButton, LangContainer, Logo, LogoContainer, NavbarLink, NavLinkContainer, NavText } from "./NavBarCompStyle";
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
  ru: { nativeName: 'RU' },
  de: { nativeName: 'DE' },
  nl: { nativeName: 'NL' }
};

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleChangeLanguage = (lang) => {
    setIsFadingOut(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setIsFadingOut(false);
    }, 500);
  };

  return (
    <Header>
      <LogoContainer to="/">
        <Logo src="/logo.png" />
      </LogoContainer>
      <NavLinkContainer className={isFadingOut ? 'fade-out' : 'fade-in'}>
        <NavbarLink key="Services" to="/services" exact="false">
          <NavText>{t(`menu.services`)}</NavText>
        </NavbarLink>
        <NavbarLink key="FAQ" to="/faq" exact="false">
          <NavText>{t(`menu.faq`)}</NavText>
        </NavbarLink>
        <NavbarLink key="Catalogue" to="/catalogue" exact="false">
          <NavText>{t(`menu.catalogue`)}</NavText>
        </NavbarLink>
        <NavbarLink key="Contact" to="/contacts" exact="false">
          <NavText>{t(`menu.contact`)}</NavText>
        </NavbarLink>
      </NavLinkContainer>
      <LangContainer>
        {Object.keys(lngs).map((lng) => (
          <LangButton key={lng} style={{ backgroundColor: i18n.resolvedLanguage === lng ? '#df0' : '#e3e3e3' }} type="submit" onClick={() => handleChangeLanguage(lng)}>
            {lngs[lng].nativeName}
          </LangButton>
        ))}
      </LangContainer>
    </Header>
  );
}

export default NavBar;
