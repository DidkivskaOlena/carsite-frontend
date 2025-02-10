import styled from "styled-components";
import {} from "../../styles/theme";

export const PrimaryContainer = styled.a`
    background:${(props) => props.theme.colors.mainText};;
    border-radius: 60px;
    width: 182px;
    height: 52px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 8px;
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

export const Title = styled.div`
    font-family: "Jura", sans-serif;;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizesDesktop.xs};
    line-height: ${(props) => props.theme.lineHeights.one};
    color: ${(props) => (props.disabled ? props.theme.colors.imgBackground : props.theme.colors.white)};

    margin-left: auto;
    margin-right: auto;

    transition: color 0.5s;
`;

export const Arrow = styled.div`
    background: ${(props) => (props.disabled ? props.theme.colors.imgBackground : props.theme.colors.white) };
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 7px;

    transition: transform 0.4s, background 0.5s;
`
