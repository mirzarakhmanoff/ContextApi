import React, { useReducer } from "react";
import { initialState, reducer } from "@/components/footer/reducer";

const Footer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="h-60 bg-slate-900 text-white">
      {/* <h2>Footer {state.a}</h2>
      <h2>{state.str}</h2>
      <button
        onClick={() => dispatch({ type: "UZ" })}
        type="button"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Uz
      </button>
      <button
        onClick={() => dispatch({ type: "RU" })}
        type="button"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        RU
      </button>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC", payload: 5 })}>
        Decrement
      </button> */}
    </div>
  );
};

export default Footer;
