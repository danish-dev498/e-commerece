import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

// cart: [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
// ],

const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },

    deleteItems: (state, action) => {
      state.cart = state.cart.filter(
        (items) => items.pizzaId !== action.payload
      );
    },

    incrementItem: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreamentItem: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItems(state, action);
    },
  },
});

export const { addItem, incrementItem, decreamentItem } = cartSlice.actions;

export const getCurrentQuantityById = (id) => (state) =>
  state.cartItem.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalCartPrice = (state) =>
  state.cartItem.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCardQuantity = (state) =>
  state.cartItem?.cart.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;

// getTotalCardQuantity  // getTotalCartPrice
