import Expense from "./Expense.js";
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";
import Card from "../Card.js";

function AllExpenses(props) {
  let [year, setYear] = useState("2020");
  let changeYear = (e) => {
    setYear(e);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYear} />
        {props.expenses.map((el, index) => (
          <Expense
            title={el.title}
            amount={el.amount}
            date={el.date}
            key={index}
          />
        ))}
      </Card>
    </div>
  );
}
export default AllExpenses;
