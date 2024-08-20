import React, { createContext, useState } from "react";
import Child from "./Child";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";

export const Context = createContext();
const Home = () => {
  const [limit, setLimit] = useState(4);
  const { data: payload, loading } = useFetch("/products", {
    limit: 16,
  });

  return (
    <div>
      <h2 className="text-center text-4xl">Home</h2>
      <Products title={"New product"} data={payload?.products} />
      <div className="flex items-center justify-center ">
        <button
          type="button"
          class="  border-e-red-400 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => setLimit((prev) => prev + 1)}
        >
          See more
        </button>
      </div>

      <Context.Provider value={(limit, setLimit)}>
        <Child />
      </Context.Provider>
    </div>
  );
};

export default Home;
