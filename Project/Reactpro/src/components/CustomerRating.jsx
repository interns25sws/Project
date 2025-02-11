import { FaStar, FaRegStar } from "react-icons/fa";

const CustomerRating = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full mt-20 grid grid-rows-[auto_auto] gap-4">
      <h2 className="text-xl font-semibold">Customer Rating</h2>

      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Rating Score */}
        <div className="text-4xl font-bold">3.0</div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <span className="text-gray-500 text-sm ml-2">(318)</span>
        </div>
      </div>

      {/* Growth Indicator */}
      <div className="grid grid-cols-2 gap-4 items-center">
        <p className="text-green-500 text-sm">↑ +35</p>
        <p className="text-gray-500 text-sm">Point from last month</p>
      </div>

      {/* Graph Placeholder */}
      <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        <p>📈 Graph Here</p>
      </div>

      {/* Download Report Button */}
      <button className="bg-green-500 text-white w-full py-2 rounded-lg text-sm font-semibold">
        Download Report
      </button>
    </div>
  );
};

export default CustomerRating;
