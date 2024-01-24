import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCarDetails } from "../../api";

const CarDetails = () => {
  const [car, setCar] = useState({});
  const [photo, setPhoto] = useState([])

  const {carId} = useParams();

  // const location = useLocation();
  // console.log(location);
  // const fromLocationRef = location.state?.from;
  // const backLinkHref = location.state?.from ?? '/catalogue/';

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getCarDetails(carId, controller.signal);
        console.log("response", response.result.model);
        setCar(response.result);
        setPhoto(response.result.photo_urls)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [carId]);

  return (
    <main>
        <Link to={"/catalogue"}>Go back</Link>
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
          <h2> {car.make} {car.model} </h2>
          <p>Price: {car.price}</p>
          <section>
            <h3>Characteristics</h3>
            <p>Condition: {car.condition}</p>
            <p>Drive unit: {car.drive_unit}</p>
            <p>Engine capacity:{car.engine_capacity} </p>
            <p>Fuel type: {car.fuel_type}</p>
            <p>Gearbox: {car.gearbox}</p>
            <p>Location:{car.location} </p>
            <p>Year: {car.year}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;