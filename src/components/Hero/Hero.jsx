import { t } from "i18next";
import { BottomRow, ButtonBox, ButtonModal, Grid, GridItem, HeroBox, HeroBoxText, HeroBoxTextSpan, HeroContainer, Image, ImgCatalogue, Main, MainTextContent, MenuBox, MenuBoxBorder, MenuBoxCatalogue, MenuBoxCatalogueNav, MenuBoxContact, MenuBoxFaq, MenuBoxServices, MenuContainer, MenuText, Modal, ModalText, NavbarLink, Overlay, TextContainer, Title, TopRow} from "./HeroCompStyle";
import { useState} from "react";
import {AuctionButton, ContactButton, FaqButton, PrimaryButton, SecondaryButton, ServicesButton} from "../Buttons/CarButtons";

const Hero = () => {

  const [modal, setModal] = useState(false)

  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <HeroContainer >
      <TopRow>
        <Main>
          <Title>{t(`hero.title`)}</Title>
          <MainTextContent>{t(`hero.definition`)}</MainTextContent>
        </Main>
        <HeroBox>
          <Image src="/carfromauction.jpg"/>
          <Overlay>
            <TextContainer>
              <HeroBoxText>{t(`hero.text`)}</HeroBoxText>
              <HeroBoxText><HeroBoxTextSpan>{t(`hero.span`)}</HeroBoxTextSpan>{t(`hero.textnext`)}</HeroBoxText>
              <HeroBoxTextSpan>{t(`hero.spannext`)}</HeroBoxTextSpan>
            </TextContainer>
            <AuctionButton></AuctionButton>
          </Overlay>
        </HeroBox>
      </TopRow>
      <BottomRow>
        <ServicesButton></ServicesButton>
        <FaqButton></FaqButton>
        <ContactButton></ContactButton>
        <ContactButton></ContactButton>
      </BottomRow>
      {/* <MenuContainer >
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
                  onClick={handleModalOpen}
                  // key="FAQ"
                  // to="/faq"
                  // exact="false"
                  >
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
                  onClick={handleModalOpen}
                  // key="Services"
                  // to="/services"
                  // exact="false"
                  >
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
                  onClick={handleModalOpen}
                  //  key="Car catalogue"
                  //  to="/catalogue"
                  //  exact="false"
                   >
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
      </MenuContainer> */}
      {/* {modal && (
        <Modal>
          <ModalText>{t(`modal.greetings`)}</ModalText>
          <ModalText>{t(`modal.conditions`)}</ModalText>
          <ModalText>{t(`modal.request`)}</ModalText>
            <ButtonModal onClick={handleModalClose}>{t(`modal.btn`)}</ButtonModal>
        </Modal>
      ) } */}
    </HeroContainer>
  );
}

export default Hero;