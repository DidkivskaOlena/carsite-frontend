import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import {} from "../../styles/theme";

export const Header = styled.nav`
  display: flex;
  

@media (${(props) => props.theme.media.tablet}) {
    max-width: 1240px;
    height: 48px;
    margin: 15px auto 24px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
`;

export const NavLinkContainer = styled.div`
`

export const NavbarLink = styled(NavLink)`
  color: #000000;
  font-size: 16px;
  line-height: 17px;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;

export const NavText = styled.div`
  letter-spacing: 0.08em;
  align-items: center;
  font-family: "Jura", sans-serif;;
  font-size: ${(props) => props.theme.fontSizesDesktop.xs};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.mainText};
  display: inline-block;

`

export const LogoContainer = styled(Link)`
  // display: flex;
  // flex-direction: column;
  // justify-content: baseline;
  // align-items: baseline;
`;

export const Logo = styled.img`
  width: 130px;
  height: 40px;

  @media (${(props) => props.theme.media.tablet}) {
    width: 130px;
    height: 40px;
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
  border-radius: 24px;
  width: 196px;
  height: 48px;

  padding: 6px 7px;

  background: ${(props) => props.theme.colors.langContainer};
`

export const LangButton = styled.button`
  font-size: 1vw;
  font-family: "Jura", sans-serif;
  font-size: ${(props) => props.theme.fontSizesDesktop.xs};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.mainText};
  letter-spacing: 0.08em;
  border-radius: 50%;
  border: none;
  height: 36px;
  width: 36px;
`