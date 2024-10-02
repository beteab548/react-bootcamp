import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthenticationAction } from "../../store";
export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.authentication.isAuthenticated;
  });
  function onClick() {
    dispatch(AuthenticationAction.logOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onClick}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
