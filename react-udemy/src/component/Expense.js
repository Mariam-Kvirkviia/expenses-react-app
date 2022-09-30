import "./Expense.css";

import Date from "./Date.js";

function Expense(props) {
  return (
    <div className="expense-item ">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default Expense;
