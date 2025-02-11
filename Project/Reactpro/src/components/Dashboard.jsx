// import React from "react";
// import {
//   MagnifyingGlassIcon,
//   Cog6ToothIcon,
//   BellIcon,
// } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   return (
//     <nav className="w-full fixed top-4 left-0 flex justify-center z-50">
//       <div className="w-[90%] max-w-screen-xl bg-white shadow-md rounded-xl p-4 flex items-center px-6 lg:px-12">
//         {/* Left - Logo */}
//         <div className="flex items-center space-x-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-8 w-8 text-green-600"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <span className="text-xl font-bold">Shopify</span>
//         </div>

//         {/* Center - Navigation Links */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 font-semibold">
//           <a href="#" className="hover:text-gray-600">
//             Dashboard
//           </a>
//           <a href="#" className="hover:text-gray-600">
//             Products
//           </a>
//           <a href="#" className="hover:text-gray-600">
//             Orders
//           </a>
//           <a href="#" className="hover:text-gray-600">
//             Customers
//           </a>
//         </div>

//         {/* Right - Icons & Profile */}
//         <div className="flex items-center space-x-4 ml-auto">
//           <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-black" />
//           <Cog6ToothIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-black" />
//           <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-black" />
//           <img
//             src="https://via.placeholder.com/32"
//             alt="Profile"
//             className="h-8 w-8 rounded-full border border-gray-300 cursor-pointer"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Updated Dashboard with Figma UI Implementation
// import React from "react";
// import Navbar from "./Navbar";
// import ActivityChart from "./Activitychart";
// import Earnings from "./Earningchart";
// import Orders from "./Orders";
// import CustomerRating from "./CustomerRating";
// import TopProducts from "./TopProducts";

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Container */}
//       <div className="pt-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Section - Activity & Earnings */}
//         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <ActivityChart />
//           <Earnings />
//         </div>

//         {/* Right Section - Orders & Customer Rating */}
//         <div className="grid grid-cols-1 gap-6">
//           <Orders />
//           <CustomerRating />
//         </div>
//       </div>

//       {/* Bottom Section - Top Products */}
//       <div className="px-6 md:px-12 lg:px-20 mt-6">
//         <TopProducts />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
