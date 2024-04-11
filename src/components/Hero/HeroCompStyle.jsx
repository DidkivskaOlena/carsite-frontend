
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #F5F5F5;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center
`

export const MainText = styled.div`
  display: flex;
  width: 30%;
  padding: 24px;
  border: 1px solid #000000;
  border-radius: 20px;
  margin-top: 45px;
`

export const MainTextContent = styled.div`
  margin-left: 30px;
  margin-top: 40px;
  width: 62px;
  height: 2px;
  background-color: #000000;
  display: block;
`

export const MainComment = styled.p`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 155px;
  margin-bottom: 81px;
  width: 500px;
  line-height: 1.75;
  font-family: "Jura", sans-serif;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    margin-left: 105px;
    margin-bottom: 61px;
    width: 400px;
  }
`

export const Comment = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  line-height: 1.75;
  font-family: "Jura", sans-serif;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
  }
`

export const HeroBox = styled.div`
  position: absolute;
  padding: 30px;
  top: 20px;
  right: 20px;
  height: 67vh;
  left: 50%;
  background: #000000;
  border-radius: 20px;
  border: 1px solid #000000;

  @media (min-width: 768px) and (max-width: 1279px) {
    top: 15px;
    right: 15px;
  }
`

export const HeroBoxTitle = styled.p`
  color: #DDFF00;
  font-family: 'SA Thousand';
  font-size: 69px;
  line-height: 1.2;
  display: inline-block;
  letter-spacing: 0.08em;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 54px;
  }
`

export const HeroBoxText = styled.p`
  color: #FFFFFF;
  font-family: 'SA Thousand';
  font-size: 27px;
  line-height: 2.66;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-right: 10px;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
  }
`

export const HeroBoxTextSpan = styled.p`
  color: #DDFF00;
  font-family: 'SA Thousand';
  font-size: 27px;
  line-height: 2.66;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-right: 10px;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
  }
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
  transition: transform 0.5s cubic-bezier(0, 0.11, 0.35, 2);
  overflow: hidden;
  cursor: zoom-in;
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 0.1px 5px 1px #0b2336;
  }
  
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 26vh;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-size: 20px;
  line-height: 17px;
  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1279px){
    font-size: 18px;
  }
`;

export const MenuBox = styled.div`
  position: absolute;
  bottom: 85px;
  right: 85px;

  @media (min-width: 768px) and (max-width: 1279px) {
    bottom: 45px;
    right: 45px;
  }
`

export const MenuBoxBorder = styled.div`
  position: absolute;
  bottom: 36px;
  right: 36px;
  animation: loading 5s linear infinite;

  @media (min-width: 768px) and (max-width: 1279px) {
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

  @media (min-width: 768px) and (max-width: 1279px) {
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

  @media (min-width: 768px) and (max-width: 1279px) {
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

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 26vh;
    width: 23vw;
  }
`
export const MenuBoxCatalogue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end
  height: 27vh;
  width: 24vw;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #FFFFFF;
  padding: 17px 20px;

  @media (min-width: 768px) and (max-width: 1279px){
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

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 10px;
  }
`

export const MenuText = styled.div`
  line-height: 32px;
  align-items: center;
  font-family: "Jura", sans-serif;

  @media (min-width: 768px) and (max-width: 1279px) {
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
    z-index: 20;
    transition: .3s all;

    /*  Побочные стили   */
    text-align: center;
    padding: 130px 0;
    transition: 0.3s all;
`

export const ModalText = styled.div`
    font-family: "Jura", sans-serif;
    font-size: 25px;
    width: 916px;
    line-height: 1.8;
    margin: 39px auto;
  

`

export const ButtonModal = styled.button`
  width: 586px;
  height: 112px;
  cursor: pointer;
  font-family: 'SA Thousand';
  font-size: 20px;
  line-height: 2;
  letter-spacing: 20%;
  margin-top: 73px;
  border-radius: 45px;
  background-color: #000000;
  color: #FFFFFF;
`
