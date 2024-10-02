import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/index.js";
export default function Counter() {
  const dispatch = useDispatch();
  const latestState = useSelector((state) => {
    return state.counter;
  });
  const showCounter = useSelector((state) => {
    return state;
  });
  function incrementFunction() {
    dispatch(counterActions.increment);
  }
  function decrementFunction() {
    dispatch(counterActions.decrement);
  }
  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter);
  }
  console.log(latestState);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{latestState}</div>}
      <button onClick={incrementFunction}>increment Counter</button>
      <button onClick={decrementFunction}>decrement Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
