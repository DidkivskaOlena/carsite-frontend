import { t } from "i18next";
import { HeroBox, HeroContainer, MenuBoxCatalogue, MenuBoxContact, MenuBoxFaq, MenuBoxServices, MenuContainer, MenuText, NavbarLink } from "./HeroCompStyle";
import { Grid } from "@mui/material";

const Hero = () => {
  return (
    <HeroContainer >
      <HeroBox>
        {/* <div><img src="/arrow.svg" width={36}/></div> */}
      </HeroBox>
      <MenuContainer >
        <Grid container spacing={1} alignItems="stretch">
            <Grid item xs={3}>
              <NavbarLink 
                  key="Contact"
                  to="/contacts"
                  exact="false">
                    <MenuBoxContact>
                      <MenuText>
                        {t(`menu.contact`)}
                        <div><img src="/arrow.svg" width={36}/></div>
                      </MenuText>
                    </MenuBoxContact>
              </NavbarLink>
            </Grid>
            <Grid item xs={3}>
              <NavbarLink 
                  key="FAQ"
                  to="/faq"
                  exact="false">
                  <MenuBoxFaq>
                    {t(`menu.faq`)}
                    <div><img src="/arrow.svg" width={36}/></div>
                  </MenuBoxFaq>
              </NavbarLink>
            </Grid>
            <Grid item xs={3}>
              <NavbarLink 
                  key="Services"
                  to="/services"
                  exact="false">
                  <MenuBoxServices>
                    {t(`menu.services`)}
                    <div><img src="/arrowwhite.svg" width={36}/></div>
                  </MenuBoxServices>
              </NavbarLink>
            </Grid>
            <Grid item xs={3}>
              <NavbarLink 
                   key="Car catalogue"
                   to="/catalogue"
                  exact="false">
                  <MenuBoxCatalogue>
                  <div><img src="/car.png" width={36}/></div>
                    <MenuText>
                      {t(`menu.catalogue`)}
                      <div><img src="/arrow.svg" width={36}/></div>
                    </MenuText>
                  </MenuBoxCatalogue>
              </NavbarLink>
            </Grid>
        </Grid>
      </MenuContainer>
    </HeroContainer>
  );
}

export default Hero;