import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #CCC9C3;
    margin-left: 20px;
    margin-right: 20px;
`;

export const HeroBox = styled.div`
  position: relative;
  top: -70px;
  height: 67vh;
  left: 50%;
  width: 50%;
  background: #DDFF00;
  border-radius: 20px;
  border: 1px solid #000000;
`

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
`;

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-size: 20px;
  line-height: 17px;
  text-decoration: none;
`;

export const MenuBoxContact = styled.div`
  
  height: 26vh;
  padding: 17px 20px;
  background: #DDFF00;
  border-radius: 20px;
  border: 1px solid #000000;
`
export const MenuBoxFaq = styled.div`
  display: flex;
  justify-content: space-between;;
  align-items: center;
   height: 26vh;
   padding: 0 20px;
  background: #F5F5F5;
  border-radius: 20px;
  border: 1px solid #000000;
`
export const MenuBoxServices = styled.div`
  display: flex;
  justify-content: space-between;;
  align-items: center;
  height: 26vh;
  padding: 17px 20px;
  background: #000000;
  border-radius: 20px;
  border: 1px solid #000000;
  color: #FFFFFF;
`
export const MenuBoxCatalogue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 26vh;
  padding: 17px 20px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #FFFFFF;
`
export const MenuText = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;;
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
