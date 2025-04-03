import { CardItem } from "../CarItem/CarItem";
import { ContainerArr, TitleArr } from "./ArrivalsStyled";
import { cars } from "../../../public/cars";
import { PrimaryButton} from "../Buttons/CarButtons";
import Slider from "./CarSlider";

const Arrivals = () => {
  return (
    <ContainerArr>
        <TitleArr>New Arrivals</TitleArr>
        <Slider slides={cars}></Slider>
        <PrimaryButton title={"To Catalogue"} isDisabled={false}></PrimaryButton>
    </ContainerArr>
  );
}

export default Arrivals;