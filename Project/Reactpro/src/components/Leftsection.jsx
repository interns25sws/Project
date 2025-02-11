import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const activityData = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 15 },
  { day: "Wed", value: 12 },
  { day: "Thu", value: 14 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 10 },
  { day: "Sun", value: 8 },
];

const earningsData = [
  { month: "Jan", revenue: 5000, profit: 3000 },
  { month: "Feb", revenue: 7000, profit: 5000 },
  { month: "Mar", revenue: 4000, profit: 2500 },
  { month: "Apr", revenue: 10000, profit: 7000 },
  { month: "May", revenue: 6000, profit: 4000 },
  { month: "Jun", revenue: 7500, profit: 5500 },
  { month: "Jul", revenue: 8500, profit: 6500 },
];

const LeftSection = () => {
  return (
    <div className="mt-20 p-6 bg-gray-100 rounded-xl shadow-md w-full">
      {/* Activity Section */}
      <div className="mb-6 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Activity</h2>
        <p className="text-gray-600 text-sm">24.9 Hours spent</p>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={activityData}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Bar dataKey="value" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Earnings Section */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Earnings</h2>
        <p className="text-gray-600 text-sm">Revenue & Profit</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-blue-600 font-bold text-lg">$37,802</span>
            <p className="text-gray-500 text-sm">Revenue</p>
          </div>
          <div>
            <span className="text-purple-600 font-bold text-lg">$37,802</span>
            <p className="text-gray-500 text-sm">Profit</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={earningsData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3B82F6" />
            <Bar dataKey="profit" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeftSection;
