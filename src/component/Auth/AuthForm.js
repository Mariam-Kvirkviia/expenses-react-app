import { useRef, useContext, useState } from "react";
import Context from "../../Context";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router-dom";
import Modal from "../../Modal";

const AuthForm = () => {
  let { isLogin, set, login } = useContext(Context);
  let [isError, setError] = useState("");
  let history = useHistory();
  let emailRef = useRef();
  let passwordRef = useRef();
  const switchAuthModeHandler = () => {
    set((prevState) => !prevState);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    let enteredEmail = emailRef.current.value;
    let enteredPassword = passwordRef.current.value;
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqB8ixB2ZHj_Sy3llzdg7OaYfiUc61pqU",
        {
          method: "POST",

          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json().then((data) => {
              login(data.idToken);

              localStorage.setItem("id", enteredEmail.split(".").join(""));
              history.replace("/expenses");
            });
          } else {
            return response.json().then((data) => {
              setError(data?.error?.message);
              throw new Error(data?.error?.message || "something went wrong!");
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqB8ixB2ZHj_Sy3llzdg7OaYfiUc61pqU",
        {
          method: "POST",

          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            history.replace("/expenses");
            set((prevState) => !prevState);
          } else {
            return response.json().then((data) => {
              setError(data?.error?.message);
              throw new Error(data?.error?.message || "something went wrong!");
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <section className={classes.auth}>
      {isError && <Modal onSetError={setError} message={isError} />}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
