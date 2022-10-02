import "./NewExpense.css";
import { useState } from "react";
let Form = (props) => {
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
    let inputsData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(inputsData);
    setAmount("");
    setTitle("");
    setDate("");
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
          <input
            type="date"
            min="2019-01-01"
            max="2022-09-25"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={changeForm}>
          Cancel{" "}
        </button>
        <button type="submit" >
          Add expense
        </button>
      </div>
    </form>
  );
};
export default Form;
