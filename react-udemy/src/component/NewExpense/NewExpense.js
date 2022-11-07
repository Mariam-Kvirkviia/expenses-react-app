import "./NewExpense.css";
import Form from "./Form.js";
import { useState } from "react";
let NewExpense = () => {
  let [stylingForm, setStylingForm] = useState(false);
  function changeForm1() {
    setStylingForm(true);
  }
  function changeForm2(tf) {
    setStylingForm(tf);
  }
  let saveExpensesData = () => {
    setStylingForm(false);
  };

  return (
    <div className="new-expense">
      {!stylingForm && <button onClick={changeForm1}>Add new expense</button>}

      {stylingForm && (
        <Form onSaveData={saveExpensesData} onChangeForm={changeForm2} />
      )}
    </div>
  );
};

export default NewExpense;
