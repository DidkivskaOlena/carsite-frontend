import styled from "styled-components";
import {} from "../../styles/theme";
import 'swiper/swiper-bundle.css';

export const ContainerArr = styled.div`
    width: 1400px;
    height: 735px;
    margin: 70px auto 0;
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

export const SwiperContainer = styled.div`
    margin-top: 40px;
  .swiper-button-next,
  .swiper-button-prev {
    color: #000; // Стилізуємо стрілочки
  }
`;

export const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 407px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  
  &.active {
    transform: scale(1.2);
  }
  
  img {
    border-radius: 10px 10px 0 0;
    width: 407px;
    height: 220px;
  }
  
  h3 {
    margin: 10px 0;
    font-size: 18px;
  }
  
  .car-details {
    margin-top: 10px;
    
    .car-photos {
      display: flex;
      gap: 10px;
      
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }
`;