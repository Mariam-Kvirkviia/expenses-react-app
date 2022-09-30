import Expense from "./Expense.js";
import "./Expense.css";
import Card from "../Card.js";
function AllExpenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => {
        return <Expense title={el.title} amount={el.amount} date={el.date} />;
      })}
    </Card>
  );
}
export default AllExpenses;
