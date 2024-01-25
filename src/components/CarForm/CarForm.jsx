import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/cars/operations";


export const CarForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      dispatch(addNewCar(form.elements.text.value))
      form.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </form>
    );
  };
  