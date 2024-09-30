import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
const toggleCounterHandler = () => {};

export default function Counter() {
  const latestState = useSelector((state) => {
    return state.counter;
  });
  console.log(latestState);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{latestState}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
