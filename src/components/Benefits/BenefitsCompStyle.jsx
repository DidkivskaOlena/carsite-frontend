import styled from "styled-components";
import {} from "../../styles/theme";

export const BenefitsContainer = styled.div`
   background-image: url('/benefits.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 500px;
`;

export const CollageContainer = styled.div`
    display: grid;
    grid-template-columns: 459px 355px; /* Розміри колонок для першого рядка */
    grid-template-rows: 245px 245px; /* Висота рядків */
    gap: 10px; /* Відступи між елементами */
    grid-template-areas: 
    "item1 item2" 
    "item3 item4"; /* Область для елементів */
    `;

export const Item = styled.div`
    background: ${(props) => props.color || '#ccc'};
  &:nth-child(1) {
    grid-area: item1; /* Великий елемент у першому рядку */
  }
  &:nth-child(2) {
    grid-area: item2; /* Малий елемент у першому рядку */
  }
  &:nth-child(3) {
    grid-area: item3; /* Малий елемент у другому рядку */
  }
  &:nth-child(4) {
    grid-area: item4; /* Великий елемент у другому рядку */
  }
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