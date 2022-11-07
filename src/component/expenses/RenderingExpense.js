import Expense from "./Expense.js";
import "./Expense.css";

let RenderingExpense = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">Expenses not found</h2>
  );
  if (props.list.length > 0) {
    expenseContent = props.list.map((el) => (
      <Expense
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
        id={el.id}
      />
    ));
  }
  return expenseContent;
};

export default RenderingExpense;
