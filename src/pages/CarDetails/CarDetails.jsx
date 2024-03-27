import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams} from "react-router-dom";
import { selectCars} from "../../redux/cars/selectors";
import { fetchCarById } from "../../redux/cars/operations";
import { useEffect } from "react";


const CarDetails = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarById(carId))
  }, [carId, dispatch]);

  const {cars} = useSelector(selectCars);
  const photo = cars.result.photo_urls

  const location = useLocation();
  const fromLocationRef = location.state?.from;

  

  return (
    <main>
        <Link to={fromLocationRef}>Go back</Link>
        <div>Car Details</div>

      <div>
        <div>
            {photo.map((image)=> {
                return (
                    <img key={image} src = {image} alt=""/>
                )
            })}
        </div>

        <div>
          <h2> {} </h2>
          <p>Price: {cars.result.price}</p>
          <section>
            <h3>Characteristics</h3>
            <p>Condition: {cars.result.condition}</p>
            <p>Drive unit: {cars.result.drive_unit}</p>
            <p>Engine capacity:{cars.result.engine_capacity} </p>
            <p>Fuel type: {cars.result.fuel_type}</p>
            <p>Gearbox: {cars.result.gearbox}</p>
            <p>Location:{cars.result.location} </p>
            <p>Year: {cars.result.year}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;