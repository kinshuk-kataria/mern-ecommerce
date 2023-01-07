import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createOrder = createAsyncThunk(
  'order/create_order',
  async data => {
    try {
      const response = await axios.post('/api/orders/', data);
      console.log(response.json());
    } catch (error) {}
  }
);

export const getorder = createAsyncThunk('order/get_order', async id => {
  try {
  } catch (error) {}
});
