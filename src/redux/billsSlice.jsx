import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bills: [],
  filterCategory: "",
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill(state, action) {
      state.bills.push(action.payload);
    },
    editBill(state, action) {
      const index = state.bills.findIndex((bill) => bill.id === action.payload.id);
      if (index !== -1) {
        state.bills[index] = action.payload;
      }
    },
    deleteBill(state, action) {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
    },
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
});

export const { addBill, editBill, deleteBill, setFilterCategory } = billsSlice.actions;
export default billsSlice.reducer;
