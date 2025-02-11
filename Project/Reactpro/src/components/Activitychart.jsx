import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const activityData = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 18 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 12 },
  { day: "Fri", value: 25 },
  { day: "Sat", value: 14 },
  { day: "Sun", value: 10 },
];

const ActivityChart = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Activity</h2>
        <button className="text-gray-500 text-sm border px-3 py-1 rounded-lg">
          Last 7 days
        </button>
      </div>
      <div className="text-4xl font-semibold mt-2">24.9</div>
      <p className="text-gray-400 text-sm">Hours spent</p>
      <div className="w-full mt-5">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={activityData} barSize={20}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#A78BFA"
              radius={[10, 10, 0, 0]}
              background={{ fill: "#EDE9FE" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
