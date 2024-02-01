import { Box, Button, FormControl, Input, TextField } from "@mui/material";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/cars/operations";

// const cloudConfig = new CloudConfig({cloudName: 'doinkhfhu'})
// const urlConfig = new URLConfig({secure: true})
// // const cld = new Cloudinary({cloud: {cloudName: 'doinkhfhu'}});
// const myImage = new CloudinaryImage("cars/project4_2x_wpesad", cloudConfig, urlConfig)



export const CarForm = () => {
  const dispatch = useDispatch();
  const [publicId, setPublicId] = useState("");
  const [photo, setPhoto] = useState([])
  // Replace with your own cloud name
  const [cloudName] = useState("doinkhfhu");
  // Replace with your own upload preset
  const [uploadPreset] = useState("main-preset");

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: true,  //restrict upload to a single file
    folder: "cars", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images/jpg", "images/jpeg", "images/png"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

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
        photo_urls: photo
      }

      dispatch(addNewCar(body))
    }
    
    return (
      <div >
        <h3>Cloudinary Upload Widget Example</h3>
          <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setPhoto={setPhoto}/>
            <div style={{ width: "800px" }}>
              <AdvancedImage
                style={{ maxWidth: "100%" }}
                cldImg={myImage}
                plugins={[responsive(), placeholder()]}
              />
            </div>
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </FormControl>
          </div> 
    );
  };