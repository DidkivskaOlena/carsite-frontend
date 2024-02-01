import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCar } from "../../redux/cars/operations";

/* eslint-disable react/prop-types */
export function CardItem({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCar(data._id));

  return (
    <NavLink to={`/catalogue/${data.id}`}>

      <div >
        <p >In good hands</p>
      </div>

      <div>
        <a >
          <img src={data.primary_photo_url} width = "260"/>
        </a>
      </div>

      <div >
        <h1>{data.model}</h1>
        <p>Make: {data.make}</p>
        <p>Price: {data.price}</p>
        <p>Year: {data.year}</p>
      </div>
      <div>
        <button>
          Learn more
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </NavLink>
  );
}
  