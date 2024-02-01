import { useSelector } from "react-redux";
import { Link, useLocation} from "react-router-dom";
import { selectCars } from "../../redux/cars/selectors";


const CarDetails = () => {
  const cars = useSelector(selectCars)

  const location = useLocation();
  const fromLocationRef = location.state?.from;
  const backLinkHref = location.state?.from ?? '/catalogue/';

  return (
    <main>
        <Link to={fromLocationRef}>Go back</Link>
        <div>Car Details</div>

      <div>
        {/* <div>
            {photo.map((image)=> {
                return (
                    <img key={image} src = {image} alt=""/>
                )
            })}
        </div> */}

        <div>
          <h2> {} </h2>
          <p>Price: {cars.price}</p>
          <section>
            <h3>Characteristics</h3>
            <p>Condition: {cars.condition}</p>
            <p>Drive unit: {cars.drive_unit}</p>
            <p>Engine capacity:{cars.engine_capacity} </p>
            <p>Fuel type: {cars.fuel_type}</p>
            <p>Gearbox: {cars.gearbox}</p>
            <p>Location:{cars.location} </p>
            <p>Year: {cars.year}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;