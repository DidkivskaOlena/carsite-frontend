import styled from "styled-components";
import {} from "../../styles/theme";

export const PrimaryContainer = styled.a`
    background:${(props) => props.theme.colors.mainText};;
    margin: 0 auto;
    border-radius: 60px;
    width: 182px;
    height: 52px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 19px 8px 19px 23px;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:active .arrow {
        background: ${(props) => !props.disabled && props.theme.colors.accent};
        transform: ${(props) => !props.disabled && "rotate(-45deg)"};
    }

    &:active .title {
        color: ${(props) => !props.disabled && props.theme.colors.accent};
    }

    &:hover .arrow {
        background: ${(props) => !props.disabled && props.theme.colors.accent};
  }
`;

export const SecondaryContainer = styled.a`
    border: ${(props) => (props.disabled ? '1.50px solid #d9d9d9' : '1.50px solid #fff')};
    border-radius: 60px;
    width: 182px;
    height: 52px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 19px 23px;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: border 0.4s;

    &:hover {
        border: ${(props) => !props.disabled && '1.50px solid #df0'};
    }

    &:hover .title {
        color: ${(props) => !props.disabled && props.theme.colors.accent};
    }

    &:active {
        background: ${(props) => !props.disabled && props.theme.colors.accent};
        border: ${(props) => !props.disabled && props.theme.colors.accent};
    }

    &:active .title {
        color: ${(props) => !props.disabled && props.theme.colors.mainText};
    }
`;

export const ServicesContainer = styled.a`
    border-radius: 10px;
    padding: 20px;
    width: 170px;
    height: 150px;
    background:${(props) => props.theme.colors.mainText};
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    @media (${(props) => props.theme.media.tablet}) {
        border-radius: 10px;
        padding: 20px;
        width: 302px;
        height: 250px;
        
        align-items: end;
        justify-content: space-between;
        flex-direction: row;
    }

    &:active .page_arrow {
        background: ${(props) => props.theme.colors.accent};
        transform: rotate(-45deg);
    }

    &:hover .page_arrow {
        border: 1.50px solid #DDFF00;;
    }

    &:hover path {
            fill: ${(props) => props.theme.colors.accent}
    }

    &:active path {
            fill: ${(props) => props.theme.colors.mainText}
    }
`;

export const FaqContainer = styled.a`
    border-radius: 10px;
    border: 1px solid #0b0707;
    padding: 20px;
    width: 170px;
    height: 150px;
    background:${(props) => props.theme.colors.background};
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    @media (${(props) => props.theme.media.tablet}) {
        border-radius: 10px;
        padding: 20px;
        width: 302px;
        height: 250px;
        
        align-items: end;
        justify-content: space-between;
        flex-direction: row;
    }

    &:active .faq_arrow {
        background: ${(props) => props.theme.colors.mainText};
        transform: rotate(-45deg);
    }

    &:hover .faq_arrow {
        border: 1.50px solid #0B0707;
        background: ${(props) => props.theme.colors.mainText};
    }

    &:hover path {
            fill: ${(props) => props.theme.colors.white}
    }

    &:active path {
            fill: ${(props) => props.theme.colors.accent}
    }
`;

export const ContactContainer = styled.a`
    border: 1px solid #0b0707;
    border-radius: 10px;
    padding: 20px;
    width: 170px;
    height: 150px;
    background: url(/contactback.png);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    @media (${(props) => props.theme.media.tablet}) {
        border-radius: 10px;
        padding: 20px;
        width: 302px;
        height: 250px;
        
        align-items: end;
        justify-content: space-between;
        flex-direction: row;
    }

    &:active .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
        transform: rotate(-45deg);
    }

    &:hover .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
    }

    &:hover path {
            fill: ${(props) => props.theme.colors.white}
    }

    &:active path {
            fill: ${(props) => props.theme.colors.accent}
    }
`;

export const CatalogueContainer = styled.a`
    border: 1.5px solid #0b0707;
    border-radius: 10px;
    padding: 20px;
    width: 170px;
    height: 150px;
    background: url(/buttoncatalog.png);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    @media (${(props) => props.theme.media.tablet}) {
        border-radius: 10px;
        padding: 20px;
        width: 302px;
        height: 250px;
        
        align-items: end;
        justify-content: space-between;
        flex-direction: row;
    }

    &:active .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
        transform: rotate(-45deg);
    }

    &:hover .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
    }

    &:hover path {
            fill: ${(props) => props.theme.colors.white}
    }

    &:active path {
            fill: ${(props) => props.theme.colors.accent}
    }
`;

export const AuctionContainer = styled.a`
    position: relative;

    width: 60px;
    height: 60px;
    padding: 7px;

    @media (${(props) => props.theme.media.tablet}) {
        width: 120px;
        height: 120px;

    }

    &:active .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
        transform: rotate(-45deg);
    }

    &:hover .contact_arrow {
        background: ${(props) => props.theme.colors.mainText};
    }

    &:hover path {
            fill: ${(props) => props.theme.colors.white}
    }

    &:active path {
            fill: ${(props) => props.theme.colors.accent}
    }
`;

export const Title = styled.div`
    font-family: "Jura", sans-serif;;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizesDesktop.xs};
    line-height: ${(props) => props.theme.lineHeights.one};
    color: ${(props) => (props.disabled ? props.theme.colors.imgBackground : props.theme.colors.white)};

    margin-left: auto;
    margin-right: auto;

    transition: color 0.4s;
`;

export const ServicesTitle = styled.div`
    margin-right: auto;
    font-family: "Jura", sans-serif;
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizesMobile.s};
    line-height: ${(props) => props.theme.lineHeights.one};
    color: ${(props) => props.theme.colors.titleText};

    @media (${(props) => props.theme.media.tablet}) {
        width: 168px;
       font-size: ${(props) => props.theme.fontSizesDesktop.xmm};
    }
`;

export const PrimaryTitle = styled.div`
    margin-right: auto;
    font-family: "Jura", sans-serif;
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizesDesktop.s};
    line-height: ${(props) => props.theme.lineHeights.one};
    color: ${(props) => props.theme.colors.mainText};

    @media (${(props) => props.theme.media.tablet}) {
        width: 179px;
       font-size: ${(props) => props.theme.fontSizesDesktop.xmm};
    }
`;

export const AuctionTitle = styled.div`
    position: absolute;
    display: flex;
    justify-content: center; /* По центру по горизонталі */
    align-items: center; /* По центру по вертикалі */
    // width: 100%; /* Ширина контейнера */
    // height: 100%; /* Висота контейнера */

    @media (${(props) => props.theme.media.tablet}) {
       bottom: 6px;
        right: 6px;
    }

    animation: loading 15s linear infinite;
`;

export const Arrow = styled.div`
    background: ${(props) => (props.disabled ? props.theme.colors.imgBackground : props.theme.colors.white) };
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 7px;
    margin-left: 10px;

    transition: transform 0.4s, background 0.5s;
`

export const PageArrow = styled.div`
    border: 1.50px solid #F5F5F5;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 4px 6px;

    transition: transform 0.4s, background 0.5s;
`

export const PrimaryArrow = styled.div`
    border: 1.50px solid #0B0707;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 4px 6px;

    transition: transform 0.4s, background 0.5s;
`

export const AuctionArrow = styled.div`

    position: absolute;
    z-index: 2;
    

    transition: transform 0.4s, background 0.5s;

    @media (${(props) => props.theme.media.tablet}) {
        top: 48px;
        left: 48px;
    }
`
