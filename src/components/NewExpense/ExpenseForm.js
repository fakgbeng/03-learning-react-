import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [entiredTitle, setEnteredTitle] = useState("");
  const [entiredAmount, setEnteredAmount] = useState("");
  const [entiredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("Title Changed");
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log("Amount Changed!");
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("Date changed!");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-09-24"
            max="2024-09-24"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
