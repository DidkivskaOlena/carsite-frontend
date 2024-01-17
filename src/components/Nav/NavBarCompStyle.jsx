import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  padding: 20px 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: #CCC9C3;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 30px 40px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

  @media (min-width: 1280px) {
    padding: 40px 80px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

export const Logo = styled.img`
  width: 250px;
  height: 50px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// .header_links{
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     margin: 60px;
//     width: 1100px;

// }

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  text-decoration: none;
  margin-left: 30px;
  transition: all 250ms;
  &.active {
    color: #DDFF00;
    text-decoration: underline;
  }

  @media (max-width: 968px) {
    display: none;
  }

  @media (min-width: 1405px) {
    margin-left: 60px;
    font-size: 24px;
    line-height: 27px;
  }

  &:hover,
  :focus {
    color: #DDFF00;
    text-decoration: underline;
  }
`;

// .link{
//     font-size: 24px;
//     text-decoration: none;
//     color: #000;
// }