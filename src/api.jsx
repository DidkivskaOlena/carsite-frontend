import axios from 'axios';

axios.defaults.baseURL = 'https://carsite-backend.onrender.com';

export const fetchCars = async signal =>  {
  try {
    const response = await axios.get('/api/cars', {signal});
    return response.data;
  } catch (e) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(e);
  }
}

export const getCarDetails = async (carId, signal) => {
  try {
    const response = await axios.get(
      `/api/cars/${carId}`,
      { signal }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};


// export const addCar = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', { name, number });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteCar = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );