import React, { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    weight: "",
    gender: "Men",
    size: "",
    colors: [],
    description: "",
    tagNumber: "",
    stock: "",
    tag: "",
    pricing: "",
    discount: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizeSelect = (size) => {
    setProduct((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size],
    }));
  };

  const handleColorSelect = (color) => {
    setProduct((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleReset = () => {
    setProduct({
      name: "",
      category: "",
      brand: "",
      weight: "",
      gender: "Men",
      size: "",
      colors: [],
      description: "",
      tagNumber: "",
      stock: "",
      tag: "",
      pricing: "",
      discount: "",
    });
    setImage(null);
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-100">
      {/* Left Section - Product Preview */}
      <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
        {image ? (
          <img src={image} alt="Product" className="w-full rounded-md" />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
            No Image
          </div>
        )}
        <div className="mt-4 text-center">
          <p className="font-semibold">{product.name || "Product Name"}</p>
          <p className="text-gray-600">
            ${product.pricing || "0.00"} - ${product.discount || "0.00"}
          </p>
          <p className="text-gray-600">{product.category || "Category"}</p>
          <div className="mt-2">
            <p className="text-gray-600">
              {Array.isArray(product.size)
                ? product.size.join(", ")
                : product.size || "N/A"}
            </p>
          </div>
          <div className="mt-2 flex justify-center gap-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Product Form */}

      <div className="w-3/4 p-4 bg-white shadow-md rounded-lg">
        <div className="border">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block font-medium">Upload Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        {/* Product Information */}
        <div className="border mt-5">
          <h3 className="text-lg font-semibold m-4">Product Information</h3>
          <div className="grid grid-cols-3 gap-4 m-4 ">
            <div>
              <label className="block font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Product Category</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Brand</label>
              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Weight</label>
              <input
                type="text"
                name="weight"
                value={product.weight}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Gender</label>
              <select
                name="gender"
                value={product.gender}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded-md"
              >
                <option>Men</option>
                <option>Women</option>
                <option>Unisex</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block font-medium">Sizes</label>
              <div className="flex gap-2">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border rounded-md ${
                      product.size.includes(size)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Colors Selection */}
          <div className="mt-4 ml-5">
            <label className="block font-medium">Colors</label>
            <div className="flex gap-2 ">
              {["red", "blue", "green", "yellow", "black"].map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full border cursor-pointer ${
                    product.colors.includes(color)
                      ? "border-4 border-gray-500"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="m-4">
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="3"
            ></textarea>
          </div>

          {/* Stock & Tag */}
          <div className=" grid grid-cols-3 m-4 gap-4">
            <div>
              <label className="block font-medium">Stock</label>
              <input
                type="text"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Tag Number</label>
              <input
                type="text"
                name="tagNumber"
                value={product.tagNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Tag</label>
              <input
                type="text"
                name="tag"
                value={product.tag}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Pricing</label>
            <input
              type="text"
              name="pricing"
              value={product.pricing}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Discount</label>
            <input
              type="text"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
