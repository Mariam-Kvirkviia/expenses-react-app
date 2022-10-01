import "./NewExpense.css";
import Form from "./Form.js";
let NewExpense = (props) => {
  let saveExpensesData = (data) => {
    let expensesData = {
      ...data,
      id: Math.random().toString(),
    };
    
    props.onDate(expensesData);
  };
  return (
    <div className="new-expense">
      <Form onSaveData={saveExpensesData} />
    </div>
  );
};

export default NewExpense;
