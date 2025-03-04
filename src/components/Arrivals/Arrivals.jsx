import { CardItem } from "../CarItem/CarItem";
import { ContainerArr, TitleArr } from "./ArrivalsStyled";
import CarSlider from "./CarSlider";
import { cars } from "../../../public/cars";

const Arrivals = () => {
  return (
    <ContainerArr>
        <TitleArr>New Arrivals</TitleArr>
        <CarSlider cars={cars}></CarSlider>
    </ContainerArr>
  );
}

export default Arrivals;