
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #F5F5F5;
    margin-left: 20px;
    margin-right: 20px;
`;

export const MainText = styled.div`
  width: 30%;
  padding: 24px;
  border: 1px solid #000000;
  border-radius: 20px;
  margin-top: 45px;
`

export const MainComment = styled.p`
  font-size: 20px;
  margin-top: 35px;
  margin-left: 24px;
  width: 580px;
  line-height: 1.75;
`

export const HeroBox = styled.div`
  position: relative;
  padding: 30px;
  top: -300px;
  height: 67vh;
  left: 50%;
  width: 50%;
  background: #000000;
  border-radius: 20px;
  border: 1px solid #000000;
`

export const HeroBoxTitle = styled.p`
  color: #DDFF00;
  font-family: 'SA Thousand';
  font-size: 69px;
  line-height: 1.2;
  display: inline-block;
  letter-spacing: 0.08em;
`

export const HeroBoxText = styled.p`
  color: #FFFFFF;
  font-family: 'SA Thousand';
  font-size: 27px;
  line-height: 2.66;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-right: 10px;
`

export const HeroBoxTextSpan = styled.p`
  color: #DDFF00;
  font-family: 'SA Thousand';
  font-size: 27px;
  line-height: 2.66;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-right: 10px;
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
`;

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-size: 20px;
  line-height: 17px;
  text-decoration: none;
`;

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
`
export const MenuBoxCatalogue = styled.div`
display: flex;
flex-direction: column;
// align-items: flex-end;
justify-content: flex-end
height: 27vh;
width: 24vw;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #FFFFFF;
  padding: 17px 20px;
  
`
export const MenuBoxCatalogueNav = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const ImgCatalogue = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`

export const MenuText = styled.div`
  line-height: 36px;
  align-items: center;
`

// .container{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//     width: 100%;
//     height: 100%;
// }

// .logoImg{
//     margin-left: 50px;
// }

// .mainText{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     margin-left: 20px;
// }
