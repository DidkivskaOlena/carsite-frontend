import { useEffect } from "react";
import { selectCars } from "../../redux/cars/selectors";
import { CardItem } from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";

export function CardComponent() {
  const dispatch = useDispatch();
  const { cars, isLoading, error } = useSelector(selectCars);
  console.log(cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  
    return (
      <div>
        <div>
          {cars?.map((card) => (
            <CardItem key={card._id} data={card} />
          ))}
        </div>
      </div>
    );
  }