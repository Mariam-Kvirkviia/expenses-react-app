import "./NewExpense.css";
import { useState, useContext } from "react";
import Context from "../../Context";
let Form = (props) => {
  let ctx = useContext(Context);
  let [enteredTitle, setTitle] = useState("");
  let [enteredAmount, setAmount] = useState("");
  let [enteredDate, setDate] = useState("");
  let titleChange = (event) => {
    setTitle(event.target.value);
  };
  let amountChange = (event) => {
    setAmount(event.target.value);
  };
  let dateChange = (event) => {
    setDate(event.target.value);
  };
  let submitForm = (event) => {
    event.preventDefault();
    if (
      enteredAmount.trim().length > 0 &&
      enteredDate.trim().length > 0 &&
      enteredTitle.trim().length > 0
    ) {
      let inputsData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      ctx.DataF(inputsData);
      ctx.reFetch(Math.random());
      setAmount("");
      setTitle("");
      setDate("");
    } else {
      alert("please enter something or click cancel!");
    }
  };
  function changeForm() {
    props.onChangeForm(false);
  }
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={changeForm}>
          Cancel
        </button>
        <button>Add expense</button>
      </div>
    </form>
  );
};
export default Form;
