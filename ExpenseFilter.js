import React from "react";

function ExpenseFilter({ setFilteredCategory }) {
  return (
    <div className="expense-filter">
      <label>Filter by Category: </label>
      <select onChange={(e) => setFilteredCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
