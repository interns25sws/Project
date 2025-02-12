import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityEarnings = () => {
  // Data for Activity Graph
  const activityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Spent",
        data: [2.5, 3.8, 4.2, 5.1, 3.5, 4.7, 6.0], // Sample hours spent per day
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Earnings Graph
  const earningsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 8000, 6500, 12000, 10000, 7000, 9000], // Sample revenue data
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Profit ($)",
        data: [2000, 4000, 3000, 7000, 6000, 3500, 5000], // Sample profit data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true },
    },
  };

  return (
    <div className="col-span-1 bg-secondary p-4 rounded-lg shadow">
      {/* Activity Section */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">Activity</h2>
        <button className="bg-white font-normal w-32 rounded-lg flex items-center justify-center space-x-2">
          <img src="calendar.png" alt="calendar icon" className="h-5 w-5" />
          <span>Last 7 days</span>
        </button>
      </div>

      <p className="text-3xl font-bold mt-6 flex">
        <span>24.9</span>
        <span className="flex flex-col items-start text-sm font-normal">
          <span>Hours</span>
          <span>spent</span>
        </span>
      </p>

      {/* Activity Graph */}
      <div className="mt-6 h-64">
        <Bar
          data={activityData}
          options={{
            ...options,
            title: { text: "Weekly Activity (Hours Spent)" },
          }}
        />
      </div>

      {/* Earnings Section */}
      <h2 className="text-4xl font-semibold mt-12 flex items-center justify-between">
        <span>Earnings</span>
        <span className="text-4xl">...</span>
      </h2>

      <div className="flex justify-between">
        {[
          { label: "Revenue", color: "text-blue-600", amount: "$37,802" },
          { label: "Profit", color: "text-purple-600", amount: "$15,302" },
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`h-4 w-4 ${item.color} rounded-full mr-2`}></div>
            <div>
              <p className={`mt-8 text-3xl ${item.color}`}>{item.label}</p>
              <p className="font-bold text-xl">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Graph */}
      <div className="mt-6 h-64">
        <Bar
          data={earningsData}
          options={{ ...options, title: { text: "Weekly Earnings Overview" } }}
        />
      </div>
    </div>
  );
};

export default ActivityEarnings;
