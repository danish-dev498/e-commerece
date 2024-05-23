import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    cartItem: cartReducer,
    user: userReducer,
  },
});
