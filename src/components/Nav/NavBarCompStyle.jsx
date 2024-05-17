import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin-left: 20px;
  margin-right: 20px;
  background-color: #F5F5F5;
`;

export const Header = styled.nav`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-top: 17px;
    align-items: end;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;
    width: ${props => props.theme.whole}
}

  @media (min-width: 1024px) and (max-width: 1600px) {
    padding-top: 12px;
  }
`;

export const NavText = styled.div`
  letter-spacing: 0.08em;
  align-items: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 25px;

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: 10px;
    margin-bottom: 17px;
}

  @media (min-width: 1401px) and (max-width: 1600px) {
    font-size: 12px;
    margin-bottom: 22px;
  }
`

export const LogoContainer = styled(Link)`
  // display: flex;
  // flex-direction: column;
  // justify-content: baseline;
  // align-items: baseline;
`;

export const Logo = styled.img`
  width: 235px;
  height: 75px;

  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 160px;
  height: 51px;
}

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 205px;
  height: 66px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 1vw;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #000000;
  margin-right: 25px;
  border-radius: 50%;
  border: none;
  height: 35px;

  @media (min-width: 1024px) and (max-width: 1600px) {
   
    height: 2vw;
}
`