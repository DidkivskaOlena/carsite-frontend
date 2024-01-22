import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export function CardComponent({ data }) {
  return (
    <NavLink to={`/catalogue/${data._id}`}>

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
      </div>
    </NavLink>
  );
}
  