import React from "react";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";
const Wishlist = () => {
  const [data, dispatch] = useStateValue();
  console.log(data.wishList);
  return (
    <div>
      <h2 className="text-center text-4xl">Wishlist</h2>
      <div className="text-center text-lg">{data.a}</div>
      <Products title={"Wished Products"} data={data.wishList} />
    </div>
  );
};

export default Wishlist;
