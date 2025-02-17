import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between px-6 py-3 w-full rounded-xl shadow-md">
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
          alt="Shopify Logo"
          className="h-6"
        />
        <span className="font-semibold text-lg">Shopify</span>
      </div>
      <div className="flex items-center space-x-48 justify-around p-3 pl-12 pr-12 bg-primary rounded-2xl">
        {["Dashboard", "Products", "Order", "Customers"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-700 rounded-full hover:bg-black hover:text-white inline-block px-4 py-2 text-center transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        {["search.svg", "icons8-bell.svg", "setting.png"].map((icon, index) => (
          <a key={index} href="#" className="text-gray-700 hover:text-black">
            <img className="h-8" src={icon} alt="" />
          </a>
        ))}
        <a href="#">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
