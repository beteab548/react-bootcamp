import classes from "./MainNavigation.module.css";
import { NavLink, Outlet } from "react-router-dom";
import NewsletterSignup from "./newsLetter";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Events
            </NavLink>
          </li>
          <Outlet />
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
export default MainNavigation