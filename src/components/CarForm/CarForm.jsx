import { Box, Button, FormControl, Input, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/cars/operations";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const CarForm = () => {
  const [file, setFile] = useState("");
    const dispatch = useDispatch()

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
        photo: data.append("photo", file)
      }

      console.log(body)

      dispatch(addNewCar(body));
      // const form = event.target;
      // dispatch(addNewCar(form.elements.text.value))
      // form.reset();
    };

    const [image, setImage] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      maxFiles: 10,
      accept: {
        "image/*": [".png", ".jpg"],
      },
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.size > 5242880) {
          console.log("Image size bigger than 5MB");
          return;
        }
        setImage(
          acceptedFiles.map((upFile,) =>
            Object.assign(upFile.path, {
              preview: URL.createObjectURL(upFile),
            })
          )
        );
  
        setFile(acceptedFiles);
      },
    });
  
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
            <Box {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    name="photo"
                  />
                  <Button>
                    {isDragActive ? null : (
                      <>
                        <span>Click or Drop file</span>
                      </>
                    )}
                  </Button>
                  <div key={nanoid}>
                    {image.map((upFile) => {
                      return (
                        <div key={upFile.path}>
                          <img src={upFile.preview} alt="car-image" />
                        </div>
                      );
                    })}
                  </div>
                  {/* {!file && <p>Image required</p>} */}
                </Box>
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
  