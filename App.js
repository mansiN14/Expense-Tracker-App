import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFilter from "./ExpenseFilter";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Filter expenses by category
  const filteredExpenses = filteredCategory === "All" 
    ? expenses 
    : expenses.filter((expense) => expense.category === filteredCategory);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseFilter setFilteredCategory={setFilteredCategory} />
      <ExpenseSummary expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
