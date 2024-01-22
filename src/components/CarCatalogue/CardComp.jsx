import { useState, useEffect } from "react";
import { fetchCars } from "../../api";
import { CardComponent } from "../CarItem/CarItem";

export function CardItem() {
    const [cardsData, setCardsData] = useState([]);
  
    useEffect(() => {
      const controller = new AbortController()
      const fetchData = async () => {
        try {
          const response = await fetchCars(controller.signal);
          setCardsData(response)
        } catch (error) {
          console.log(error);
        }
      }

      fetchData()

      return () => {
        controller.abort()
      }
  
    }, []);
  
    return (
      <div>
        <div>
          {cardsData.map((card) => (
            <CardComponent key={card._id} data={card} />
          ))}
        </div>
      </div>
    );
  }