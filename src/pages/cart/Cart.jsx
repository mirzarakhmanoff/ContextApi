import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import React from "react";

const Cart = () => {
  const [data, dispatch] = useStateValue();
  console.log(data.cart);

  return (
    <div>
      <Products data={data.cart} />
    </div>
  );
};

export default Cart;
