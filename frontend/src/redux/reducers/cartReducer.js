// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';



const cartReducer = combineReducers({
  cart: cartSlice,
  // Add other reducers as needed
});

export default cartReducer;
