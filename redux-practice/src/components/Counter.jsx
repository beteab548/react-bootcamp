import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const toggleCounterHandler = () => {};

export default function Counter() {
  const dispache = useDispatch();
  const latestState = useSelector((state) => {
    return state.counter;
  });
  function incrementFUnction() {
    dispache({ type: "increment" });
  }
  function decrementDunction() {
    dispache({ type: "decrement" });
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{latestState}</div>
      <button onClick={incrementFUnction}>increment Counter</button>
      <button onClick={decrementDunction}>decrement Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
