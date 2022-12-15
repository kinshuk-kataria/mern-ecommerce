import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(
        '/api/register',
        { name, email, password },
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message)
        return rejectWithValue(error.response.data.message);
      else return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };

      const { data } = await axios.post(
        '/api/login',
        { email, password },
        config
      );
      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
