import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.logoImg}>
        <img
          src="maincar.png"
          width={"1021px"}
          height={"386px"}
        ></img>
      </div>
      <div className={style.mainText}>
        <h1>Slogan slogan slogan</h1>
        <p className={style.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Fugiat
          incidunt magni blanditiis ullam, iusto beatae nulla explicabo dolore.
          <br />
          Maiores expedita error cumque ratione tempora neque obcaecati
          voluptate, similique ipsa soluta.
        </p>
      </div>
    </div>
  );
}

export default Hero;