import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const selectedYearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.items.filter(
    (exp) => exp.date && exp.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultSelectedYear={selectedYear}
          onSelectedYearChange={selectedYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
