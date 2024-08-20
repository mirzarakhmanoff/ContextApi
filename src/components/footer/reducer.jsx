export const initialState = {
  a: 5,
  b: 4,
  str: "Salom Dunyo",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, a: state.a + action.payload };
    case "DEC":
      return { ...state, a: state.a - action.payload };
    case "UZ":
      return { ...state, str: "bbb" };
    case "RU":
      return { ...state, str: "aaaa" };

    default:
      return state;
  }
};
