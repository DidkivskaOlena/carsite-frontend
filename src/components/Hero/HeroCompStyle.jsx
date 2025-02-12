
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {} from "../../styles/theme";

export const HeroContainer = styled.div`
    background: ${(props) => props.theme.colors.background};
    width: 1240px;
    height: 653px;
    margin: 0 auto;

    display: grid;
    grid-template-rows: auto auto;
    gap: 10px;
`

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const Main = styled.div`
  width: 440px;
  margin: auto 0;
`

export const Title = styled.h1`
  line-height: ${(props) => props.theme.lineHeights.one};
  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxl};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.mainText};
`

export const MainTextContent = styled.p`
  text-align: justify;
  margin-top: 20px;

  line-height: ${(props) => props.theme.lineHeights.two};
  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxm};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.mainTextTransp};
`

export const HeroBox = styled.div`
  position: relative;

  border-radius: 10px;
  width: 615px;
  height: 393px;

  background: ${(props) => props.theme.colors.componentBackground};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background: linear-gradient(180deg, rgba(11, 7, 7, 0) 0%, #0b0707 100%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const TextContainer = styled.div`
  width: 440px;
`;

export const HeroBoxText = styled.p`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.secondFamily};
  font-size: ${(props) => props.theme.fontSizesDesktop.xl};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.accent};
  line-height: ${(props) => props.theme.lineHeights.one};
`

export const HeroBoxTextSpan = styled.p`
  display: inline-block;

  margin-right: 8px;

  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizesDesktop.mm};
  text-transform: uppercase;
  color:${(props) => props.theme.colors.titleText};
`

export const HeroBoxButtonContainer = styled.div`
  width: 120px;
  height: 120px;
`

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  margin-bottom: 0px;
`;

export const Grid = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const GridItem = styled.li`
  height: 27vh;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
  border: 0.3px solid #000000;
  object-fit: cover;
  justify-content: center;
  transition: transform 1s cubic-bezier(0, 0.11, 0.35, 2);
  overflow: hidden;
  cursor: zoom-in;
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 0.1px 5px 1px #0b2336;
  }
  
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 26vh;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-size: 16px;
  line-height: 17px;
  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1439px){
    font-size: 18px;
  }
`;

export const MenuBox = styled.div`
  position: absolute;
  bottom: 85px;
  right: 85px;

  @media (min-width: 768px) and (max-width: 1439px) {
    bottom: 45px;
    right: 45px;
  }
`

export const MenuBoxBorder = styled.div`
  position: absolute;
  bottom: 36px;
  right: 36px;
  animation: loading 15s linear infinite;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100px;
    bottom: 14px;
    right: 14px;
  }
`

export const ButtonBox = styled.div`
  width: 36px
`

export const MenuBoxContact = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 24vw;
  height: 27vh;
  padding: 17px 20px;
  background: #DDFF00;
  border-radius: 20px;
  border: 1px solid #000000;

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 26vh;
    width: 23vw;
  }
`
export const MenuBoxFaq = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
   height: 27vh;
   width: 24vw;
   padding: 17px 20px;
  background: #F5F5F5;
  border-radius: 20px;
  border: 1px solid #000000;

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 26vh;
    width: 23vw;
  }
`
export const MenuBoxServices = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
  height: 27vh;
  width: 24vw;
  padding: 17px 20px;
  background: #000000;
  border-radius: 20px;
  border: 1px solid #000000;
  color: #FFFFFF;

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 26vh;
    width: 23vw;
  }
`
export const MenuBoxCatalogue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 27vh;
  width: 24vw;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #FFFFFF;
  padding: 17px 20px;

  @media (min-width: 768px) and (max-width: 1439px){
    height: 26vh;
    width: 23vw;
  }
  
`
export const MenuBoxCatalogueNav = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const ImgCatalogue = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 10px;
  }
`

export const MenuText = styled.div`
  line-height: 32px;
  align-items: center;
  font-family: "Jura", sans-serif;

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 11px;
    line-height: 22px;
  }
`
export const Modal = styled.div`
    /*  Установаем ширину окна  */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    z-index: 100;
    transition: .3s all;

    /*  Побочные стили   */
    text-align: center;
    padding: 130px 0;
    transition: 5s all;

    @media (min-width: 768px) and (max-width: 1439px) {
      padding: 70px 0;
    }
`

export const ModalText = styled.div`
    font-family: "Jura", sans-serif;
    font-size: 18px;
    width: 916px;
    line-height: 1.8;
    margin: 39px auto;
  
    @media (min-width: 768px) and (max-width: 1439px) {
      font-size: 16px;
      width: 720px;
      margin: 29px auto;
    }
`

export const ButtonModal = styled.button`
  width: 586px;
  height: 112px;
  cursor: pointer;
  font-family: 'SA Thousand';
  font-size: 16px;
  line-height: 2;
  letter-spacing: 20%;
  margin-top: 73px;
  border-radius: 45px;
  background-color: #000000;
  color: #FFFFFF;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 53px;
    width: 486px;
    height: 92px;
    font-size: 16px;
  }
`
export const ButtonModalFaq = styled.a`
  cursor: pointer;
  font-family: 'SA Thousand';
  font-size: 16px;
  line-height: 2;
  letter-spacing: 20%;
  border-radius: 45px;
  background-color: #000000;
  color: #FFFFFF;
  padding: 40px 80px;
  text-decoration: none;
  position: relative;
  top: 100px;
  left: 1vw;

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 14px;
    padding: 30px 70px;
  }
`