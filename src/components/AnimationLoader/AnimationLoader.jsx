import Lottie from "lottie-react";
import animationData from "../../../public/loader.json";
const AnimationLoader = () => (
  <Lottie animationData={animationData} loop={true} />
);

export default AnimationLoader