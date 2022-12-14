import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authActions';

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, state => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default authSlice.reducer;
