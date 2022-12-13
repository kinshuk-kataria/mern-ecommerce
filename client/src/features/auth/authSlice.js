import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    REGISTER_SUCCESS: state => {}
  }
});

export default authSlice.reducer;
