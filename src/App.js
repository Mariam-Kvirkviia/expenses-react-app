import AllExpenses from "./component/expenses/AllExpenses.js";
import NewExpense from "./component/NewExpense/NewExpense.js";
import { useState, useEffect } from "react";
import Context from "./Context";
function App() {
  let [fetching, setFetch] = useState(false);

  let [addExpense, setAddExpense] = useState("");
  useEffect(() => {
    console.log("effect");
    fetch("https://react1-9a97e-default-rtdb.firebaseio.com/expenses.json")
      .then((response) => response.json())
      .then((data) => {
        let fetchedData = [];
        for (let key in data) {
          let d = {
            id: key,
            amount: data[key].amount,
            title: data[key].title,
            date: new Date(data[key].date),
          };
          fetchedData.push(d);
        }

        setAddExpense(fetchedData);
      });
  }, [fetching]);

  let onDate = (expense) => {
    fetch("https://react1-9a97e-default-rtdb.firebaseio.com/expenses.json", {
      method: "POST",
      body: JSON.stringify(expense),
    });
  };
  return (
    <Context.Provider
      className="App"
      value={{ DataF: onDate, expenses: addExpense, reFetch: setFetch }}
    >
      <NewExpense />
      <AllExpenses />
    </Context.Provider>
  );
}

export default App;
