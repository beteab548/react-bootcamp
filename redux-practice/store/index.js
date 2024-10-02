import { createSlice, configureStore } from "@reduxjs/toolkit";
const CounterInitialState = { counter: 0, showCounter: true };
const authenticationInitialState = { isAuthenticated: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: CounterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: authenticationInitialState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: AuthenticationSlice.reducer,
  },
});
export const AuthenticationAction = AuthenticationSlice.actions;
export const counterActions = counterSlice.actions;
export default store