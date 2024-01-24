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


export const logIn = async ({ email, password }, signal) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password }, {signal});
      return response.data;
    } catch (e) {
      if (axios.isCancel){
        return []
      }
      throw new Error(e)
    }
  }


export const addCar = async (body, signal) => {
    try {
      const response = await axios.post('/api/cars', body, {signal});
      return response.data;
    } catch (e) {
      if (axios.isCancel){
        return []
      }
      throw new Error(e)
    }
  }

export const deleteCar = async (id, signal) => {
    try {
      const response = await axios.delete(`/api/cars/${id}`, {signal});
      return response.data;
    } catch (e) {
      if (axios.isCancel){
        return []
      }
      throw new Error(e)
    }
  }