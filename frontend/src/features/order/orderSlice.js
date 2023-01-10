import { createSlice } from "@reduxjs/toolkit"
import { createOrder } from "./orderActions";

const initialState = {
    orders: [],
    loading:false
}

const orderSlice = createSlice(
  {  name: 'order',
        initialState,
        reducers: {},
        extraReducers:builder=> {
            builder.addCase(createOrder.fulfilled, (state,action) => {
            
        })
    }
}
);

export default orderSlice.reducer;