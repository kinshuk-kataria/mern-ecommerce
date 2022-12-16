import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productActions';

const initialState = {
  items: [],
  loading: false
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.loading = false;
    });
  }
});

export default productSlice.reducer;
