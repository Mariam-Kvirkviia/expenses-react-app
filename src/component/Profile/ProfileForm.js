import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  let token = localStorage.getItem("token");
  let history = useHistory();
  let passwordRef = useRef();
  let handleSubmit = (event) => {
    let enteredPassword = passwordRef.current.value;
    event.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAqB8ixB2ZHj_Sy3llzdg7OaYfiUc61pqU`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          history.replace("/auth");
        } else {
          return response.json().then((data) => {
            throw new Error(data?.error?.message || "something went wrong!");
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
