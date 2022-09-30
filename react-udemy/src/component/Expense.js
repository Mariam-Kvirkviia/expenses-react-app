import "./Expense.css";
import Card from "./Card.js";
import Date from "./Date.js";
import "./Card.css";
import { useState } from "react";
function Expense(props) {
  const [title, setTitle] = useState(props.title);
  const change = () => {
    setTitle("you change!");
  };
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={change}>change text</button>
    </Card>
  );
}
export default Expense;
