import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCart = createAsyncThunk('user/fetchCart', async id => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.get(`/api/cart/${id}`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
});
