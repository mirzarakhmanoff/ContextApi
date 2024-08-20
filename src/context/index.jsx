import { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
