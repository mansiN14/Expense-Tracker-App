import React from "react";

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <p>{expense.expense}</p>
      <p>${expense.amount}</p>
      <p>{expense.category}</p>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
