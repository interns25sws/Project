import React from "react";
import Navbar from "../components/Navbar";
import ActivityEarnings from "../components/ActivityEarnings";
import Orders from "../components/Orders";
import CustomerRating from "../components/CustomerRating";
import TopProducts from "../components/TopProducts";

const Dashboard = () => {
  const ratingTrendData = [
    { month: "Jan", rating: 3.5 },
    { month: "Feb", rating: 3.8 },
    { month: "Mar", rating: 4.0 },
    { month: "Apr", rating: 3.9 },
    { month: "May", rating: 3.7 },
    { month: "Jun", rating: 3.5 },
    { month: "Jul", rating: 3.0 },
    { month: "Aug", rating: 2.9 },
    { month: "Sep", rating: 3.2 },
    { month: "Oct", rating: 3.5 },
    { month: "Nov", rating: 3.0 },
    { month: "Dec", rating: 3.3 },
  ];
  return (
    <div className="bg-primary m-2 min-h-screen">
      <Navbar />
      <main className="grid grid-cols-3 gap-4 mt-2 p-4">
        <ActivityEarnings />
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <Orders />
          <CustomerRating
            rating={3.0}
            totalReviews={318}
            growth={35}
            trendData={ratingTrendData}
          />
          <div className="bg-red-300 p-6 rounded-lg shadow-md ">
            <TopProducts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
