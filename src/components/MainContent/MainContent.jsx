import style from "./MainContent.module.css";

export function MainContent() {
  return (
    <div className={style.container}>
      <div className={style.carImg}>
        <img
          src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-car-silhouette-png-image_6856896.png"
          width={"300px"}
          height={"250px"}
        ></img>
      </div>
      <div className={style.title}>
        <h1>Slogan slogan slogan</h1>
        <p className={style.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          incidunt magni blanditiis ullam, iusto beatae nulla explicabo dolore.
          Maiores expedita error cumque ratione tempora neque obcaecati
          voluptate, similique ipsa soluta.
        </p>
     
         
      </div>
    </div>
  );
}
