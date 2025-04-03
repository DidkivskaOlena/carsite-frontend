import styled, { keyframes, css } from 'styled-components';
import {} from "../../styles/theme";
import 'swiper/swiper-bundle.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ContainerArr = styled.div`
    width: 1400px;
    height: 735px;
    margin: 70px auto 0;
    text-align: center;
`

export const TitleArr = styled.h2` 
  font-family: ${(props) => props.theme.font.secondFamily};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizesDesktop.l};
  line-height: ${(props) => props.theme.lineHeights.oneone};
  text-transform: uppercase;
  text-align: center;
  color:${(props) => props.theme.colors.mainText};
`

export const SliderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 1400px;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
    text-align: center;
`;

export const ViewPortContainer = styled.div`
    width: 1240px; /* Обмежує область перегляду */
    overflow: hidden; /* Приховує зайві слайди */
    margin: 0 auto; /* Центрує слайдер */
    position: relative;
`;

export const SlidesWrapper = styled.div`
    display: flex;
    gap: 10px;
    transform: translateX(${(props) => -props.activeIndex * (407 + 10) + 417}px);
    transition: transform 1.2s ease-in-out;
    position: relative;
    
`;


export const Slide = styled.div`
    flex-shrink: 0;
    width: 407px; /* Фіксована ширина слайда */
    // height: 300px; /* Висота слайду */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    position: relative;

`;

export const MainImageContainer = styled.div`
    width: 407px;
    height: 220px;
    transform: translateY(${(props) => (props.isActive ? '0px' : '70px')});
    transition: border-radius 0.5s ease-in-out, transform 0.8s ease-in-out; /* Плавна зміна радіуса */

`;

export const MainImage = styled.img`
    width: 407px;
    height: 220px;
    border-radius: ${(props) => (props.isActive ? '10px' : '10px 10px 0 0')}; /* Динамічний бордер */

`;

export const CarId = styled.p`
    min-width: 78px;
    height: 31px;
    border-radius: 30px;
    padding: 5px 12px;
    background: ${(props) => props.theme.colors.componentBackground};
    
    font-family: ${(props) => props.theme.font.fontFamily};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizesDesktop.xs};
  
    color:${(props) => props.theme.colors.white};
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 1;
`

export const Details = styled.div`
 opacity: ${(props) => (props.isActive ? '1' : '0')};
  pointer-events: ${(props) => (props.isActive ? 'auto' : 'none')};
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: ${(props) =>
    props.isActive
      ? 'opacity 1.5s ease-in-out'
      : 'opacity 0.5s ease-in-out'}; /* Задаємо різний час для появи та зникнення */

  img {
    border-radius: 10px;
    width: 198px;
    height: 120px;
  }
`;

export const Description = styled.div`
    border: 2px solid ${(props) => props.theme.colors.mainText};
    border-radius: ${(props) => (props.isActive ? '10px' : '0 0 10px 10px')};
    padding: 30px 20px;
    width: 407px;
    height: 224px;
    background: ${(props) => props.theme.colors.background};

    text-align: start;
    transform: translateY(${(props) => (props.isActive ? '0px' : '-70px')});
    transition: border 0.3s ease-in-out, background-color 0.3s ease-in-out,  transform 0.8s ease-in-out;;

    h3 {
          font-family: ${(props) => props.theme.font.fontFamily};
          font-weight: ${(props) => props.theme.fontWeights.bold};
          font-size: ${(props) => props.theme.fontSizesMobile.xm};
          line-height: ${(props) => props.theme.lineHeights.one};
          letter-spacing: -0.03em;
          color:${(props) => props.theme.colors.mainText};
    }
`;

export const DescriptionComponent =styled.div`
        display: flex;
        justify-content: space-evenly;
        border-radius: 10px;
        width: 367px;
        height: 95px;
        position: relative;
        margin-top: 15px;
        background: ${(props) => props.theme.colors.descriptionComponent};

        .indicator {
        flex-basis: 117px 117px 133px ; /* Розтягує індикатор рівномірно */
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 79%; /* Висота розділювальної лінії */
            background-color: rgba(11, 7, 7, 0.2); /* Колір розділювальної лінії */
        }
    }
        
        h4 {
          font-family: ${(props) => props.theme.font.fontFamily};
          font-weight: ${(props) => props.theme.fontWeights.normal};
          font-size: ${(props) => props.theme.fontSizesDesktop.xxs};
          line-height: ${(props) => props.theme.lineHeights.one};
          color:${(props) => props.theme.colors.mainText};
        }
`

export const FirstIndicator =styled.p`
        font-family: ${(props) => props.theme.font.fontFamily};
        font-weight: ${(props) => props.theme.fontWeights.semiBold};
        font-size: ${(props) => props.theme.fontSizesMobile.xxs};
        line-height: ${(props) => props.theme.lineHeights.one};
        color:${(props) => props.theme.colors.mainText};
        text-decoration: line-through;
`

export const SecondIndicator =styled.p`
        font-family: ${(props) => props.theme.font.fontFamily};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        font-size: ${(props) => props.theme.fontSizesMobile.s};
        line-height: ${(props) => props.theme.lineHeights.one};
        color:${(props) => props.theme.colors.mainText};
`

export const About = styled.p`
      font-family: ${(props) => props.theme.font.fontFamily};
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizesMobile.s};
      line-height: ${(props) => props.theme.lineHeights.two};
      color:${(props) => props.theme.colors.comment};

      margin-top: 15px;
`

export const ArrowButton = styled.button`
    cursor: pointer;
    z-index: 10;
    outline: none; /* Забирає рамку */
    background-color: transparent; /* Забирає фон */

    &:active {
      background-color: transparent;
    }
`;

