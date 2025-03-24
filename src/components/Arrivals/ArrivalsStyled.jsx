import styled from "styled-components";
import {} from "../../styles/theme";
import 'swiper/swiper-bundle.css';

export const ContainerArr = styled.div`
    width: 1400px;
    height: 735px;
    margin: 70px auto 0;
    text-align: center;
`

export const TitleArr = styled.p`
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
    transition: transform 0.3s ease-in-out;
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

`;

export const MainImage = styled.img`
    width: 407px;
    height: 220px;
    border-radius: ${(props) => (props.isActive ? '10px' : '10px 10px 0 0')}; /* Динамічний бордер */
    transition: border-radius 0.3s ease-in-out; /* Плавна зміна радіуса */
`;

export const Details = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

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
    
    transition: border 0.3s ease-in-out, background-color 0.3s ease-in-out;

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
   background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    margin: 0 20px;
    z-index: 10;
    color: #000;

    &:hover {
        color: #555;
    }
`;

