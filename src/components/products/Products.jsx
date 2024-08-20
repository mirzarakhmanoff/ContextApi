import { useStateValue } from "@/context";
import React, { useState } from "react";

const Products = ({ data, title }) => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [_, dispatch] = useStateValue();

  const handleLike = (productId) => {
    setLikedProducts((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const items = data?.map((product) => {
    const isLiked = likedProducts.has(product.id);

    return (
      <div
        className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105"
        key={product.id}
      >
        <div className="relative w-full h-60 bg-gray-200">
          <img
            className="w-full h-full object-cover"
            src={product.images[0]}
            alt={product.title}
          />
          <div className="absolute top-2 right-2">
            <button
              className={`p-2 rounded-full shadow-lg focus:outline-none ${
                isLiked ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={
                (() => handleLike(product.id),
                () => dispatch({ type: "ADD_WISH", payload: product }))
              }
            >
              <svg
                className={`w-6 h-6 ${
                  isLiked ? "text-white" : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold mb-2 truncate">{product.title}</p>
          <strong className="text-xl text-gray-800">${product.price}</strong>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => dispatch({ type: "ADD_CART", payload: product })}
              className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items}
      </div>
    </div>
  );
};

export default Products;
