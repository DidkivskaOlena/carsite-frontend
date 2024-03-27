import { useEffect } from "react";
import { selectCars } from "../../redux/cars/selectors";
import { CardItem } from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, fetchCars } from "../../redux/cars/operations";
import { Button, Card, CardContent, CardMedia, Grid, ListItem, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export function CardComponent({cars}) {
  const location = useLocation()
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCar(cars._id));

    return (
      <Grid spacing={4}>
          {cars.map((card) => (
            <Card key={card._id} sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', margin: 2 }}>
              <CardMedia
              component="img"
              height="140"
              image={card.primary_photo_url}
            />
            <CardContent>
              <NavLink to={`/catalogue/${card._id}`} state={{from: location}}>
              {card.make}
              </NavLink>
              <Typography>Model: {card.model}</Typography>
              <Typography>Price: {card.price}</Typography>
              <Typography>Year: {card.year}</Typography>
            </CardContent>
            <Button variant="solid" color="danger" size="lg">
                Add to favorites
              </Button>
      
              <Button variant="solid" color="danger" size="lg" onClick={handleDelete}>
                Delete
              </Button>
            </Card>   
            ))}
      </Grid> 
    );
  }