import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

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
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(userLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.userToken;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default authSlice.reducer;
