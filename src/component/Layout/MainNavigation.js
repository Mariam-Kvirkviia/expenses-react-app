import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import Context from "../../Context";

const MainNavigation = () => {
  let { logout } = useContext(Context);

  let handleLogout = () => {
    logout();
  };
  let token = localStorage.getItem("token");
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Expenses App</div>
        </Link>
        <nav>
          <ul>
            {token && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {token && (
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>
            )}
            {token && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
