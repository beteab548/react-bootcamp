import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { AuthenticationAction } from "../../store";
export default function Auth() {
  const dispatch = useDispatch();
  function onSubmit() {
    dispatch(AuthenticationAction.logIn());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
