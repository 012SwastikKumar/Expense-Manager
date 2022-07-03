import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { //for getting the expense data from child elements (ExpenseForm.js)
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        }
        props.onAddExpense(expenseData); // sending new expense data to App.js
    }
    return (
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;