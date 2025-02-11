import React from "react";
import {
  FaShoppingBag,
  FaUserPlus,
  FaPercentage,
  FaCalendarCheck,
} from "react-icons/fa";

const ordersData = [
  {
    title: "Total Orders",
    value: "13,647",
    icon: <FaShoppingBag />,
    growth: "0.56%",
  },
  { title: "New Leads", value: "9,526", icon: <FaUserPlus />, growth: "0.56%" },
  { title: "Deals", value: "976", icon: <FaPercentage />, growth: "0.56%" },
  {
    title: "Bookings",
    value: "13,647",
    icon: <FaCalendarCheck />,
    growth: "0.56%",
  },
];

const Orders = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="grid grid-cols-2 gap-4">
        {ordersData.map((order, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-lg p-4"
          >
            <div className="text-2xl text-gray-700 mr-3">{order.icon}</div>
            <div>
              <p className="text-xl font-semibold">{order.value}</p>
              <p className="text-gray-500 text-sm">{order.title}</p>
              <span className="text-green-500 text-xs">
                ↑ {order.growth} View more
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
