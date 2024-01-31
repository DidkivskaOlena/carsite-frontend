import { Box, Button, FormControl, Input, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/cars/operations";
import { useState } from "react";

export const CarForm = () => {
    const [photo, setPhoto] = useState([]);
    const dispatch = useDispatch()

    const handlePhotoChange = (e) => {
      const reader = new FileReader()
      if (e.target.files[0].size > 5242880) {
        console.log("Image size bigger than 5MB");
        return;
      }
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
          const image = reader.result;
          if (
            image.includes("image/png") ||
            image.includes("image/jpg") ||
            image.includes("image/jpeg")
          ) {
            setPhoto(image);
            const file = new FormData();
            file.append("photo", e.target.files[0])
            console.log(file);
          }
        };
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      
      const data = new FormData(event.currentTarget);
       
      const body = {
        make: data.get('make'),
        model: data.get('model'),
        mileage: data.get("mileage"),
        condition: data.get('condition'),
        drive_unit: data.get('drive_unit'),
        engine_capacity: data.get('engine_capacity'),
        fuel_type: data.get('fuel_type'),
        gearbox: data.get('gearbox'),
        location: data.get('location'),
        price: data.get('price'),
        year: data.get('year'),
        photo: photo
      }

      console.log(body)

      dispatch(addNewCar(body));
      // const form = event.target;
      // dispatch(addNewCar(form.elements.text.value))
      // form.reset();
    };

    
    return (
      <FormControl component="form" enctype='multipart/form-data' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="make"
              label="Make"
              name="make"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="model"
              label="Model"
              type="model"
              id="model"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mileage"
              label="Mileage"
              name="mileage"
              autoComplete="mileage"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="condition"
              label="Condition"
              name="condition"
              autoComplete="condition"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="drive_unit"
              label="Drive unit"
              type="drive_unit"
              id="drive_unit"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="engine_capacity"
              label="Engine capacity"
              name="engine_capacity"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="fuel_type"
              label="Fuel type"
              type="fuel_type"
              id="fuel_type"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="gearbox"
              label="Gearbox"
              name="gearbox"
              autoComplete="gearbox"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="location"
              id="location"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="year"
              label="Year"
              type="year"
              id="year"
            />
            <form>
              <Input
                name="photo"
                type="file"
                id="photo"
                accept="image/jpg, image/jpeg"
                onChange={handlePhotoChange}/>
            </form>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </FormControl>
    );
  };
  