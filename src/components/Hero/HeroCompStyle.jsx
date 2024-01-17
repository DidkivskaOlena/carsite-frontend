import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 65px;
    background: #CCC9C3;

    @media (min-width: 768px) and (max-width: 1279px) {
       height: 200px
      }
    @media (min-width: 1280px) {
        height: 200px
      }
`;

export const HeroContentContainer = styled.div`
  max-width: 1280px;
  padding: 0px 70px 0px 110px;
  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 0px 32px 0px 32px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
`;

// .container{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//     width: 100%;
//     height: 100%;
// }

// .logoImg{
//     margin-left: 50px;
// }

// .mainText{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     margin-left: 20px;
// }
