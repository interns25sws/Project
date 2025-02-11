import React from "react";
import LeftSection from "./components/Leftsection";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import CustomerRating from "./components/Customerrating";
import TopProducts from "./components/TopProducts";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-start p-6">
      <LeftSection />
      <Navbar />
      <Orders />
      <CustomerRating />
      <TopProducts />
    </div>
  );
}

export default App;
