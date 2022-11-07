import AllExpenses from "./component/expenses/AllExpenses.js";
import NewExpense from "./component/NewExpense/NewExpense.js";
import { useState } from "react";
import Context from "./Context";
function App() {
  const expenses = [];
  let [addExpense, setAddExpense] = useState(expenses);
  let onDate = (expense) => {
    setAddExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <Context.Provider
      className="App"
      value={{ DataF: onDate, expenses: addExpense }}
    >
      <NewExpense />
      <AllExpenses />
    </Context.Provider>
  );
}

export default App;
