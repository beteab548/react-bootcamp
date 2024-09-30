import redux from "redux";
const reducerFunction = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return { counter: 0 };
};
const store = redux.createStore();
export default store