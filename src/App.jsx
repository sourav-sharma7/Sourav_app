import React from "react";
import BillDashboard from "./components/BillDashboard";
import TimeSeriesChart from "./components/TimeSeriesChart";

const App = () => {
  return (
    <div className="app">
      <h1 align = 'center'>Bill Manager</h1>
      <BillDashboard />
      <TimeSeriesChart />
    </div>
  );
};

export default App;
