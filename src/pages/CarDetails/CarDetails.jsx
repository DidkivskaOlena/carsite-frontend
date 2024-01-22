import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getCarDetails } from "../../api";

const CarDetails = () => {
  const [car, setCar] = useState([]);
  const [photo, setPhoto] = useState([])

  const {carId} = useParams();

  const location = useLocation();
  const fromLocationRef = location.state?.from;
  const backLinkHref = location.state?.from ?? '/catalogue/';

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getCarDetails(carId, controller.signal);
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
          {/* <p>Price: {car.price}</p>
          <section>
            <h3>Characteristics</h3>
            <p>Condition: {car.condition}</p>
            <p>Drive unit: {car.drive_unit}</p>
            <p>Engine capacity:{car.engine_capacity} </p>
            <p>Fuel type: {car.fuel_type}</p>
            <p>Gearbox: {car.gearbox}</p>
            <p>Location:{car.location} </p>
            <p>Year: {car.year}</p>
          </section> */}
        </div>
      </div>

      {/* <AddInfo>
        <h4>Additional information</h4>
        <LinkWrapper>
          <NavLinkStyled to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLinkStyled>
          <NavLinkStyled to="Reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLinkStyled>
        </LinkWrapper>
      </AddInfo> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </main>
  );
};

export default CarDetails;