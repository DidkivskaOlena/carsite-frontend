import { t } from "i18next";
import { Grid, GridItem, HeroBox, HeroBoxText, HeroBoxTextSpan, HeroBoxTitle, HeroContainer, ImgCatalogue, MainComment, MainText, MenuBoxCatalogue, MenuBoxCatalogueNav, MenuBoxContact, MenuBoxFaq, MenuBoxServices, MenuContainer, MenuText, NavbarLink } from "./HeroCompStyle";


const Hero = () => {
  return (
    <HeroContainer >
      <MainText>
        <img src="automaxgarage.svg"/>
      </MainText>
      <MainComment>IS A MODERN AUTOSERVICE WITH A DIVERSE SPECTER OF SERVICES </MainComment>
      <HeroBox>
        <HeroBoxTitle>DISCO</HeroBoxTitle>
        <HeroBoxTitle>VER</HeroBoxTitle>
        <HeroBoxText> OUR</HeroBoxText>
        <HeroBoxTextSpan> BMV </HeroBoxTextSpan>
        <HeroBoxText>PROGRAMMING <br/> SERVICES</HeroBoxText>
        {/* <div><img src="/arrow.svg" width={36}/></div> */}
      </HeroBox>
      <MenuContainer >
        <Grid container spacing={3} alignItems="stretch">
            <GridItem item xs={3}>
              <NavbarLink 
                  key="Contact"
                  to="/contacts"
                  exact="false">
                    <MenuBoxContact>
                      <MenuText>
                        {t(`menu.contact`)}
                      </MenuText>
                      <div><img src="/arrow.svg" width={36}/></div>
                    </MenuBoxContact>
              </NavbarLink>
            </GridItem>
            <GridItem item xs={3}>
              <NavbarLink 
                  key="FAQ"
                  to="/faq"
                  exact="false">
                  <MenuBoxFaq>
                    <MenuText>
                      {t(`menu.faq`)}
                    </MenuText>
                    <div><img src="/arrow.svg" width={36}/></div>
                  </MenuBoxFaq>
              </NavbarLink>
            </GridItem>
            <GridItem item xs={3}>
              <NavbarLink 
                  key="Services"
                  to="/services"
                  exact="false">
                  <MenuBoxServices>
                    <MenuText>
                      {t(`menu.services`)}
                    </MenuText>
                    <div><img src="/arrowwhite.svg" width={36}/></div>
                  </MenuBoxServices>
              </NavbarLink>
            </GridItem>
            <GridItem item xs={3}>
              <NavbarLink 
                   key="Car catalogue"
                   to="/catalogue"
                    exact="false">
                  <MenuBoxCatalogue>
                    <ImgCatalogue><img src="/photo_2024-03-27_23-19-44-min.png" width={36}/></ImgCatalogue>
                    <MenuBoxCatalogueNav>
                      <MenuText>
                        {t(`menu.catalogue`)}
                      </MenuText>
                      <div><img src="/arrow.svg" width={36}/></div>
                    </MenuBoxCatalogueNav>
                  </MenuBoxCatalogue>
              </NavbarLink>
            </GridItem>
        </Grid>
      </MenuContainer>
    </HeroContainer>
  );
}

export default Hero;