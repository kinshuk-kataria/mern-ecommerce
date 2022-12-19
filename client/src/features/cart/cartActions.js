import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCart = createAsyncThunk('cart/fetchCart', async id => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.get(`/api/cart/:${id}`, config);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async data => {
  const { userId, productId, quantity } = data;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.post(
      `/api/cart/:${userId}`,
      { productId, quantity },
      config
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateCart = createAsyncThunk('/cart/update', async data => {
  const { userId, productId, qty } = data;
  try {
    const { data } = await axios.put(`/api/cart/:${userId}`, {
      productId,
      qty
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCartItem = createAsyncThunk(
  'cart/deleteFromCart',
  async data => {
    const { userId, productId } = data;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const { data } = await axios.delete(
        `/api/cart/:${userId}/${productId}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
