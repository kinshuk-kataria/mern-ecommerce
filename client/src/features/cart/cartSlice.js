import { createSlice } from '@reduxjs/toolkit';
import { getCart } from './cartActions';

const initialState = {
  cart: null,
  loading: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCart.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(getCart.rejected, state => {
      state.loading = false;
    });
  }
});

export default cartSlice.reducer;
