import Expense from "./Expense.js";
import "./Expense.css";
function AllExpenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((el) => {
        return <Expense title={el.title} amount={el.amount} date={el.date} />;
      })}
    </div>
  );
}
export default AllExpenses;
