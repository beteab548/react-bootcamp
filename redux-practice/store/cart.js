import { createStore, createSlice } from "@reduxjs/toolkit";
const initialState = { cartItems: [], showModal: false };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingProductIndex = state.cartItems.findIndex((cartItems) => {
        return cartItems.id == item.id;
      });
      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].qnt =
          state.cartItems[existingProductIndex].qnt + 1;
      } else {
        state.cartItems.push({ ...item, qnt: 1 });
      }
    },
    increaseQunatity(state, action) {
      const item = action.payload;
      const existingProductIndex = state.cartItems.findIndex((cartItems) => {
        return cartItems.id == item.id;
      });
      state.cartItems[existingProductIndex].qnt =
        state.cartItems[existingProductIndex].qnt + 1;
    },
    decreaseQunatity(state, action) {
      const item = action.payload;
      const existingProductIndex = state.cartItems.findIndex((cartItems) => {
        return cartItems.id == item.id;
      });
      const existingProductQnt = state.cartItems[existingProductIndex].qnt;
      if (existingProductQnt < 1) {
        console.log("items removed");
      }
      state.cartItems[existingProductIndex].qnt =
        state.cartItems[existingProductIndex].qnt - 1;
    },
  },
});
const store = createStore(cartSlice.reducer);
export const cartSliceAction = cartSlice.actions;
