import Arrivals from "../../components/Arrivals/Arrivals";
import Benefits from "../../components/Benefits/Benefits";
import { Faq } from "../../components/FAQ/Faq";
import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import PhotoCar from "../Photo/photo";

const Home = () => {
    return <>
    <Hero/>
    <Arrivals></Arrivals>
    <Offers></Offers>
    <Benefits></Benefits>
    <PhotoCar></PhotoCar>
    <Faq></Faq>
    </>
}

export default Home