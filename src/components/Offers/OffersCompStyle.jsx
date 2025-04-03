import styled from "styled-components";
import {} from "../../styles/theme";

export const OffersContainer = styled.div`
    width: 100%;
    height: 570px;
    margin: 80px auto 0;

    background: ${(props) => props.theme.colors.componentBackground};
}
`;

export const TitleOff = styled.h2` 
  font-family: ${(props) => props.theme.font.secondFamily};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizesDesktop.l};
  line-height: ${(props) => props.theme.lineHeights.oneone};
  text-transform: uppercase;
  color:${(props) => props.theme.colors.accent};
`;   

export const TitleItemOff = styled.h3` 
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizesDesktop.m};
  line-height: ${(props) => props.theme.lineHeights.two};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color:${(props) => props.theme.colors.white};
`  ;

export const CommentItemOff = styled.p` 
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxm};
  line-height: ${(props) => props.theme.lineHeights.two};
  text-align: justify;
  color:${(props) => props.theme.colors.whiteTransp};
` ;