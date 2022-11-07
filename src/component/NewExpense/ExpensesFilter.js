import "./ExpensesFilter.css";
import { useState } from "react";
const ExpensesFilter = (props) => {
  let [year, setYear] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    props.onChangeYear(year);
  };
  let onChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <form className="expenses-filter__control" onSubmit={handleSubmit}>
        <input onChange={onChange} value={year} />

        <button>Filter by year</button>
      </form>
    </div>
  );
};

export default ExpensesFilter;
