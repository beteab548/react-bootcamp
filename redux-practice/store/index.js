import { createStore } from "redux";
const ReduxFunction = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return  state ;
};
const store = createStore(ReduxFunction);
export default store;
