import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './orderActions';

const initialState = {
  orders: [],
  loading: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOrders.pending, state => {
      state.loading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, state => {
      state.cart = null;
      state.loading = false;
    });
  }
});

export default orderSlice.reducer;
