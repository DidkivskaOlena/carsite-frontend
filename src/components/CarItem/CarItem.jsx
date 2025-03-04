import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCar } from "../../redux/cars/operations";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

/* eslint-disable react/prop-types */
export function CardItem({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCar(data._id));

  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', margin: 2 }}>
        <CardMedia
        component="img"
        height="140"
      />
      <CardContent>
        {/* <NavLink to={`/catalogue/${data.id}`}>
         {data.make}
        </NavLink>
        <Typography>Model: {data.model}</Typography>
        <Typography>Price: {data.price}</Typography>
        <Typography>Year: {data.year}</Typography> */}
      </CardContent>
      <Button variant="solid" color="danger" size="lg">
          Add to favorites
        </Button>

        <Button variant="solid" color="danger" size="lg" onClick={handleDelete}>
          Delete
        </Button>
    </Card>

    // <NavLink to={`/catalogue/${data.id}`}>

    //   <div>
    //     <a >
    //       <img src={data.primary_photo_url} width = "260"/>
    //     </a>
    //   </div>

    //   <div >
    //     <h1>{data.model}</h1>
    //     <p>Make: {data.make}</p>
    //     <p>Price: {data.price}</p>
    //     <p>Year: {data.year}</p>
    //   </div>
    //   <div>
    //     <button>
    //       Learn more
    //     </button>
    //     <button onClick={handleDelete}>Delete</button>
    //   </div>
    // </NavLink>
  );
}
  