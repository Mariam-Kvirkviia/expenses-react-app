import "./Expense.css";
import Card from "../Card.js";

import Date from "./Date.js";
import "../Card.css";

function Expense(props) {
  return (
    <div>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </div>
  );
}
export default Expense;
