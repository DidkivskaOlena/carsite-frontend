import styled, { keyframes } from "styled-components";
import {} from "../../styles/theme";

// Анімація для заповнення кільця
const fillCircle = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const OffersContainer = styled.div`
    width: 1440px;
    height: 570px;
    margin: 80px auto 0;
    display: flex;
    position: relative;
    overflow: hidden;
    justify-content: space-between;
    padding: 70px 80px 70px 100px;
    background: ${(props) => props.theme.colors.componentBackground};
}
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isActive ? '0' : '-100vw')};
  width: 1440px;
  height: 570px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  transition: left 0.5s ease-in-out;
  background: ${(props) => props.theme.colors.componentBackground};;
`;

export const TitleOff = styled.h2` 
  font-family: ${(props) => props.theme.font.secondFamily};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizesDesktop.l};
  line-height: ${(props) => props.theme.lineHeights.oneone};
  text-transform: uppercase;
  color:${(props) => props.theme.colors.accent};
  z-index: 1;
`;   

export const TitleItemOff = styled.h3` 
  margin-top: 195px;
  margin-left: 100px;
  width: 500px;

  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizesDesktop.m};
  line-height: ${(props) => props.theme.lineHeights.two};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color:${(props) => props.theme.colors.white};
`  ;

export const CommentItemOff = styled.p` 
  margin-top: 10px;
  margin-left: 100px;
  width: 455px;   
  margin-right: 146px;

  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizesDesktop.xxm};
  line-height: ${(props) => props.theme.lineHeights.two};
  text-align: justify;
  color:${(props) => props.theme.colors.whiteTransp};
` ;



export const SlideContent = styled.div`
`;

export const Image = styled.img`
  width: 739px;
  height: 570px;
  position: relative;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: flex-end;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => (props.isActive ? '#007BFF' : '#ccc')};
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  /* SVG кільце */
  &::after {
    content: '';
    position: absolute;
    top: -5px; /* Відступ зверху */
    left: -5px; /* Відступ зліва */
    width: 60px; /* Розмір кільця більше кнопки + 2 * відступ */
    height: 60px; /* Аналогічно ширині */
    border: 2px solid ${(props) => (props.isActive ? '#007BFF' : 'transparent')};
    border-radius: 50%;
    box-sizing: border-box; /* Щоб рамка враховувалася у розмірах */
    animation: ${(props) =>
      props.isActive ? 'fillCircle 60s linear infinite' : 'none'};
  }

  /* Анімація заповнення */
  @keyframes fillCircle {
    from {
      transform: rotate(0deg);
      border-color: rgba(0, 123, 255, 0.3);
    }
    to {
      transform: rotate(360deg);
      border-color: rgba(0, 123, 255, 1);
    }
  }
`;
