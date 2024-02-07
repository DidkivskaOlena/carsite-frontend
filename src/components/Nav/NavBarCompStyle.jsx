import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  padding: 20px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
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