import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBill, editBill } from "../redux/billsSlice";

const AddEditBill = ({ editingBill, setEditingBill }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    if (editingBill) setForm(editingBill);
  }, [editingBill]);

  const categories = ["FoodNDining", "Utility", "Shopping", "Education", "Travel"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.description && form.category && form.amount && form.date) {
      if (editingBill) {
        dispatch(editBill(form));
        setEditingBill(null);
      } else {
        dispatch(addBill({ ...form, id: Date.now() }));
      }
      setForm({ description: "", category: "", amount: "", date: "" });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: +e.target.value })}
        required
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />
      <button type="submit">{editingBill ? "Save Changes" : "Add Bill"}</button>
      {editingBill && <button onClick={() => setEditingBill(null)}>Cancel</button>}
    </form>
  );
};

export default AddEditBill;
