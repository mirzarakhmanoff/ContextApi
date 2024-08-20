// src/context/reducer.jsx

export const initialState = {
  a: 5,
  wishList: [],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, a: state.a + action.payload };

    case "ADD_WISH":
      const wishIdx = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (wishIdx < 0) {
        return { ...state, wishList: [...state.wishList, action.payload] };
      } else {
        return {
          ...state,
          wishList: state.wishList.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }

    case "ADD_CART":
      const cartIdx = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIdx < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        return state;
      }

    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(
                  (item.quantity || 1) + action.payload.quantity,
                  1
                ),
              }
            : item
        ),
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
