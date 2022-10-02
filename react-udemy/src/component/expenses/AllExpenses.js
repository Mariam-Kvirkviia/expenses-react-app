import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";
import Card from "../Card.js";
import RenderingExpense from "./RenderingExpense.js";
import "./RenderingExpense.css";
function AllExpenses(props) {
  let [year, setYear] = useState("2020");
  let changeYear = (e) => {
    setYear(e);
  };
  let filteredExpenses = props.expenses.filter(
    (el) => el.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYear} />
        <RenderingExpense list={filteredExpenses} />
      </Card>
    </div>
  );
}
export default AllExpenses;
