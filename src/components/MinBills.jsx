import React from "react";
import { useSelector } from "react-redux";

const MinBills = ({ budget }) => {
  const { bills } = useSelector((state) => state.bills);

  // Sort bills by amount in ascending order
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

  return (
    <div>
      <h3>Bills Within Budget: ₹{budget}</h3>
      <ul>
        {bills.map((bill) => (
          <li
            key={bill.id}
            style={{
              backgroundColor: selectedBills.includes(bill.id) ? "lightgreen" : "white",
            }}
          >
            {bill.description} - ₹{bill.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinBills;
