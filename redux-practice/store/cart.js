import { createStore, createSlice, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
const initialState = {
  cartItems: [],
  showModal: false,
  notification: { error: null, isSending: false, dataSent: false },
};
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

      if (existingProductQnt <= 1) {
        state.cartItems = state.cartItems.filter((itmes) => {
          return itmes.id !== item.id;
        });
        return;
      }
      state.cartItems[existingProductIndex].qnt =
        state.cartItems[existingProductIndex].qnt - 1;
    },
    showModal(state) {
      state.showModal = !state.showModal;
    },
    showNotification(state, action) {
      state.notification.error = action.payload.error;
      state.notification.dataSent = action.payload.dataSent;
      state.notification.isSending = action.payload.isSending;
    },
  },
});
export const cartSliceAction = cartSlice.actions;
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartSliceAction.showNotification({
        error: null,
        isSending: true,
        dataSent: false,
      })
    );
    const requestFunction = async () => {
      const response = await fetch("http://localhost:3001/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "hey there" }),
      });
      if (!response.ok) {
        throw new Error("failed sending data!");
      }
    };
    try {
      await requestFunction();
      dispatch(
        cartSliceAction.showNotification({
          error: null,
          isSending: false,
          dataSent: true,
        })
      );
    } catch (err) {
      dispatch(
        cartSliceAction.showNotification({
          error: "failed sending data",
          isSending: false,
          dataSent: false,
        })
      );
    }
  };
};
const store = createStore(cartSlice.reducer, applyMiddleware(thunk));
export default store;
