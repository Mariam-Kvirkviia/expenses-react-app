import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import Context from "../../Context";

const MainNavigation = () => {
  let { userLoggedIn, logout } = useContext(Context);
  let history = useHistory();
  let handleLogout = () => {
    logout();
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!userLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
