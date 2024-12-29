import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill, setFilterCategory } from "../redux/billsSlice";
import AddEditBill from "./AddEditBill";

const BillDashboard = () => {
  const { bills, filterCategory } = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const [editingBill, setEditingBill] = useState(null);
  const [highlightedBills, setHighlightedBills] = useState([]);
  const [budget, setBudget] = useState(50000); // Default budget value

  const filteredBills = filterCategory
    ? bills.filter((bill) => bill.category === filterCategory)
    : bills;

  const handleMinBills = () => {
    const sortedBills = [...bills].sort((a, b) => a.amount - b.amount);
    let total = 0;
    const selectedBills = [];
    for (const bill of sortedBills) {
      if (total + bill.amount <= budget) {
        total += bill.amount;
        selectedBills.push(bill.id);
      } else {
        break;
      }
    }
    setHighlightedBills(selectedBills);
  };

  return (
    <div>
      <AddEditBill editingBill={editingBill} setEditingBill={setEditingBill} />

      {/* Filter Section */}
      <div className="filter-container">
        <label htmlFor="filter-category" className="filter-label">
          Filter Category:
        </label>
        <select
          id="filter-category"
          className="filter-dropdown"
          onChange={(e) => dispatch(setFilterCategory(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select Category
          </option>
          <option value="">Clear Filter</option>
          <option value="FoodNDining">Food & Dining</option>
          <option value="Utility">Utility</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
        </select>
      </div>

      {/* Budget Section */}
      <div className="budget-container">
        <label htmlFor="monthly-budget" className="budget-label">
          Monthly Budget:
        </label>
        <div className="budget-input-group">
          <input
            id="monthly-budget"
            type="number"
            className="budget-input"
            value={budget}
            onChange={(e) => setBudget(+e.target.value)}
          />
          <button className="min-bills-btn" onClick={handleMinBills}>
            Click here to highlight minimum bills that should be paid
          </button>
        </div>
      </div>

      {/* Bill Cards */}
      <div className="bill-cards">
        {filteredBills.map((bill) => (
          <div
            className="bill-card"
            key={bill.id}
            style={{
              backgroundColor: highlightedBills.includes(bill.id)
                ? "lightgreen"
                : "white",
            }}
          >
            <h3>{bill.description}</h3>
            <p>Category: {bill.category}</p>
            <p>Amount: ₹{bill.amount}</p>
            <p>Date: {bill.date}</p>
            <button onClick={() => setEditingBill(bill)}>Edit</button>
            <button onClick={() => dispatch(deleteBill(bill.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillDashboard;
