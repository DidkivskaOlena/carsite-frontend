import styled from "styled-components";
import {} from "../../styles/theme";

export const FaqContainer = styled.div`
    width: 1240px;
    height: 826px;
    margin: 80px auto 0;

    display: flex;
`;

export const CustomerContainer = styled.div`
    width: 615px;
    height: 826px;

    display: flex;
`;

export const TitleItemFaq = styled.h3` 
  font-family: ${(props) => props.theme.font.secondFamily};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizesDesktop.l};
  line-height: ${(props) => props.theme.lineHeights.oneone};
  text-transform: uppercase;
  text-align: center;
  color:${(props) => props.theme.colors.mainText};
`  ;

export const FormContainer = styled.div`
    width: 615px;
    height: 826px;

    display: flex;
`;

