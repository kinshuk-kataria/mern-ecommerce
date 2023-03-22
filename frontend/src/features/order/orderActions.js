import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrders = createAsyncThunk(
  'order/get_order/userId',
  async userId => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const { data } = await axios.get(`/api/get-orders/${userId}`, config);
      return data;
    } catch (error) {
      console.log('Orders request faild', error);
    }
  }
);
