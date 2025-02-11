import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const earningsData = [
  { month: "Jan", revenue: 8000, profit: 5000 },
  { month: "Feb", revenue: 12000, profit: 8000 },
  { month: "Mar", revenue: 9000, profit: 6000 },
  { month: "Apr", revenue: 16000, profit: 11000 },
  { month: "May", revenue: 11000, profit: 7000 },
  { month: "Jun", revenue: 14000, profit: 9000 },
  { month: "Jul", revenue: 13000, profit: 8500 },
];

const Earnings = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-full">
      <h2 className="text-xl font-semibold">Earnings</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-400 text-sm">Revenue</p>
          <h3 className="text-2xl font-semibold">$37,802</h3>
          <span className="text-green-500 text-sm">↑ 0.56%</span>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Profit</p>
          <h3 className="text-2xl font-semibold">$37,802</h3>
          <span className="text-green-500 text-sm">↑ 0.56%</span>
        </div>
      </div>
      <div className="w-full mt-5">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={earningsData}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="revenue"
              fill="#3B82F6"
              radius={[10, 10, 0, 0]}
              background={{ fill: "#E0F2FE" }}
            />
            <Bar dataKey="profit" fill="#93C5FD" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Earnings;
