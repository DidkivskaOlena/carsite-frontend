import style from "./CardItem.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export function CardComponent({ data }) {
  return (
    <div className={style.cards}>

      <div>
        <a href="#" className={style.favoritesIcon}>
          <img src={data.primary_photo_url} width = "260"/>
        </a>
      </div>

      <div className={style.cardHeader}>
        <p className={style.nameCard}>In good hands</p>
      </div>

      <div className={style.inCard}>
        <h1>{data.model}</h1>
        <p>Make: {data.make}</p>
        <p>Price: {data.price}</p>
        <p>Year: {data.year}</p>
      </div>
      <div>
        <button className={`${style.cardBtn} ${style.ripple}`}>
          Learn more
        </button>
      </div>
    </div>
  );
}

export function CardItem() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://carsite-backend.onrender.com/api/cars")
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка запроса", error);
      });
  });

  return (
    <div>
      <div className={style.cardContainer}>
        {cardsData.map((card) => (
          <CardComponent key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}
