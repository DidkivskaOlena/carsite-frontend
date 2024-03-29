import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin-left: 20px;
  margin-right: 20px;
  background-color: #CCC9C3;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 30px 40px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

  @media (min-width: 1280px) {
    border-bottom: 1px solid #000000;
  }
`;

export const Header = styled.nav`
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
    padding-top: 17px;
    align-items: end;
    justify-content: space-between;
    flex-direction: row;
    width: 50%
  }
`;

export const LogoContainer = styled(Link)`
  // display: flex;
  // flex-direction: column;
  // justify-content: baseline;
  // align-items: baseline;
`;

export const Logo = styled.img`
  width: 235px;
  height: 75px;
`;

export const AuthContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: flex-start;
  margin-right: 0px;

  @media (max-width: 968px) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const AuthButtonStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  background: #DDFF00;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  color: #D0B28F;
  text-decoration: none;
  height: 47px;
  padding-left: 28px;
  padding-right: 28px;

  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background: #DDFF00;
  }
  &:before {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }
`;

export const LoginButtonStyled = styled(NavLink)`
  display: flex;
  background: #DDFF00;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  color: #D0B28F;
  text-decoration: none;
  padding: 12px 28px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background: #DDFF00;
  }
`;

export const LangContainer = styled.div`
  margin-bottom: 5px;
`

export const LangButton = styled.button`
  font-size: 20px;
  color: #000000;
  margin-right: 25px;
  border-radius: 50%;
  border: none;
  height: 35px;
`