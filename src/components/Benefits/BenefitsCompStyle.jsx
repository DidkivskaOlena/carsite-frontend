import styled from "styled-components";
import {} from "../../styles/theme";

export const BenefitsContainer = styled.div`
   background-image: url('/benefits.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 500px;
    margin-top: 100px;
`;

export const CollageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Відступ між елементами */
    width: 824px; /* Загальна ширина колажу (459px + 355px + gap) */
    margin: 0 auto;
`;

export const Item = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: inset 0 4px 80px 3px #fff;
    background: rgba(45, 45, 45, 0.04);
    padding: 40px 30px;
`;

export const TitleItemBen = styled.h3` 
  font-family: ${(props) => props.theme.font.secondFamily};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizesDesktop.xm};
  line-height: ${(props) => props.theme.lineHeights.two};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color:${(props) => props.theme.colors.mainText};
`  ;

export const TitleAddItemBen = styled.h3` 
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxm};
  line-height: ${(props) => props.theme.lineHeights.two};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color:${(props) => props.theme.colors.mainText};
`  ;

export const CommentItemBen = styled.p` 
    margin-top: 30px;

  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxm};
  line-height: ${(props) => props.theme.lineHeights.two};
  text-align: justify;
  color:${(props) => props.theme.colors.mainTextTransp};
` ;