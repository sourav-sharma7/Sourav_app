import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const TimeSeriesChart = () => {
  const { bills } = useSelector((state) => state.bills);

  // Map and sort the data
  const data = bills
    .map((bill) => ({
      date: bill.date,
      amount: Number(bill.amount),
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date in ascending order

  return (
    <div align="center">
      <h2 align="center">Time Series Line Chart will be plotted below</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default TimeSeriesChart;
