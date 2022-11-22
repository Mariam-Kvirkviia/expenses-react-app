import "./Expense.css";
import Card from "../Card.js";
import { useContext } from "react";
import Context from "../../Context";
import Date from "./Date.js";
import "../Card.css";

function Expense(props) {
  let { reFetch, id } = useContext(Context);

  let handleDelete = () => {
    fetch(
      `https://react-projects-160bb-default-rtdb.firebaseio.com/expenses/${id
        .split(".")
        .join("")}/${props.id}.json`,
      { method: "DELETE" }
    ).then((response) => {
      reFetch(Math.random());
    });
  };

  return (
    <div>
      <Card className="expense-item">
        <div className="expense-item ">
          <Date date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-date ">{props.amount}</div>
          </div>
        </div>

        <button onClick={handleDelete} className="button">
          Delete
        </button>
      </Card>
    </div>
  );
}
export default Expense;
