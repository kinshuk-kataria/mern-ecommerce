import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  loading: false
};

const orderSlice = createSlice({ name: 'order', initialState, reducers: {} });

export default orderSlice.reducer;
