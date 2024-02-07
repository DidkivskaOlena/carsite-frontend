import { useDispatch, useSelector } from "react-redux";
import { CardComponent} from "../../components/CarCatalogue/CardComp"
import { selectCars } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { Grid } from "@mui/material";

const CarCatalogue = () => {
    const dispatch = useDispatch();
    const { cars, isLoading, error } = useSelector(selectCars);
    console.log(cars);
    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);
  
    return (
      <div>
        <div>
        {isLoading && <p>Loading ... </p>}
        {error && <p>{error}</p>}
        <Grid container spacing={4}>
          {cars?.length > 0 && <CardComponent cars={cars}/>}
        </Grid>
        </div>
      </div>
    );
}

export default CarCatalogue