import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    const { data } = await axios.get('/api/items', config);
    return data;
  } catch (error) {
    console.log(error);
  }
});
