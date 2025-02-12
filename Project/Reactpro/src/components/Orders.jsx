import React from "react";

const Orders = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Orders</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Total Orders */}
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/orders.png" alt="Orders" className="w-8 h-8" />
          <p className="text-lg font-bold">Total Orders</p>
          <p className="text-xl">13,647</p>
          <span className="text-green-500">+0.56%</span>
        </div>

        {/* New Leads */}
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/leads.png" alt="Leads" className="w-8 h-8" />
          <p className="text-lg font-bold">New Leads</p>
          <p className="text-xl">9,525</p>
          <span className="text-green-500">+0.56%</span>
        </div>

        {/* Deals */}
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/deals.png" alt="Deals" className="w-8 h-8" />
          <p className="text-lg font-bold">Deals</p>
          <p className="text-xl">976</p>
          <span className="text-green-500">+0.56%</span>
        </div>

        {/* Bookings */}
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/bookings.png" alt="Bookings" className="w-8 h-8" />
          <p className="text-lg font-bold">Bookings</p>
          <p className="text-xl">13,647</p>
          <span className="text-green-500">+0.56%</span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
