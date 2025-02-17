import React from "react";
import Dashboard from "./Pages/Dashboard";
import InvoiceTable from "./components/InvoiceTable";
import AddProduct from "./components/AddProduct";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Dashboard />
      <AddProduct />
      <InvoiceTable />
      <Profile />
    </div>
  );
}

export default App;
