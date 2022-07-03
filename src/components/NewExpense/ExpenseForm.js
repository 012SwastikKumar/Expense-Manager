import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isActive, setIsActive] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(enteredData); // sending data to parent component (NewExpense.js)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    changeActiveForm();
  };
  const changeActiveForm  = () => {
    setIsActive((prev) => !prev);
  }
  return (
    <form onSubmit={submitHandler}>
      {isActive === true ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31-"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={changeActiveForm} >Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        <button onClick={changeActiveForm}>Add Expense</button>
      )}
    </form>
  );
};
export default ExpenseForm;
