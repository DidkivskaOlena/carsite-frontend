import { HeroContainer, HeroContentContainer } from "./HeroCompStyle";

const Hero = () => {
  return (
    <HeroContainer >
      <HeroContentContainer>
      <div >
        <img
          src="maincar.png"
          width={"1021px"}
          height={"386px"}
        ></img>
      </div>
      <div >
        <h1>Slogan slogan slogan</h1>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Fugiat
          incidunt magni blanditiis ullam, iusto beatae nulla explicabo dolore.
          <br />
          Maiores expedita error cumque ratione tempora neque obcaecati
          voluptate, similique ipsa soluta.
        </p>
      </div>
      </HeroContentContainer>
    </HeroContainer>
  );
}

export default Hero;