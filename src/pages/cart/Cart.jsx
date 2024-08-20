import React from "react";
import { useStateValue } from "@/context";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();

  const handleIncrease = (id) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity: 1 },
    });
  };

  const handleDecrease = (id) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity: -1 },
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: { id },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border-b"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg mr-2"
                >
                  -
                </button>
                <span className="text-lg mx-2">{item.quantity || 1}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-gray-500 text-white px-2 py-1 rounded-lg ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
