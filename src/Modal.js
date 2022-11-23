import classes from "./Modal.module.css";
let Modal = (props) => {
  let handleClosing = () => {
    props.onSetError("");
  };
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h1>{props.message}</h1>
        <button onClick={handleClosing}>Close</button>
      </div>
    </div>
  );
};
export default Modal;
