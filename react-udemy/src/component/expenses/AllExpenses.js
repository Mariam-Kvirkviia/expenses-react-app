import { useState, useContext } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";
import Card from "../Card.js";
import RenderingExpense from "./RenderingExpense.js";
import ExpensesChart from "./ExpensesChart.js";
import "./RenderingExpense.css";
import Context from "../../Context";
function AllExpenses() {
  let [filteredExpenses, setFilter] = useState("");
  let ctx = useContext(Context);

  let changeYear = (e) => {
    setFilter(
      ctx.expenses.filter((el) => el.date.getFullYear().toString() === e)
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={changeYear} />
        <ExpensesChart
          expenses={filteredExpenses ? filteredExpenses : ctx.expenses}
        />
        <RenderingExpense
          list={filteredExpenses ? filteredExpenses : ctx.expenses}
        />
      </Card>
    </div>
  );
}
export default AllExpenses;
