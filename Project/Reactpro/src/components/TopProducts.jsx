import React from "react";
import { BsThreeDots } from "react-icons/bs";

const TopProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Lipstick",
      stock: "Out of stock",
      price: "$10.5",
      statusColor: "text-red-500",
    },
    {
      id: 2,
      name: "Lipstick",
      stock: "In stock",
      price: "$10.5",
      statusColor: "text-green-500",
    },
    {
      id: 3,
      name: "Lipstick",
      stock: "In stock",
      price: "$10.5",
      statusColor: "text-green-500",
    },
    {
      id: 4,
      name: "Lipstick",
      stock: "In stock",
      price: "$10.5",
      statusColor: "text-green-500",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full mt-20">
      <h2 className="text-xl font-semibold">Top products</h2>
      <div className="mt-4">
        {/* Table Header */}
        <div className="grid grid-cols-4 text-gray-500 text-sm font-semibold border-b pb-2">
          <div>Photo</div>
          <div>Name</div>
          <div>Stock</div>
          <div>Price</div>
        </div>

        {/* Product List */}
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-4 items-center text-sm py-3 border-b"
          >
            <div>
              <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>{" "}
              {/* Placeholder for image */}
            </div>
            <div>{product.name}</div>
            <div className={`${product.statusColor} font-semibold`}>
              {product.stock}
            </div>
            <div className="flex justify-between items-center">
              {product.price}
              <BsThreeDots className="cursor-pointer text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
