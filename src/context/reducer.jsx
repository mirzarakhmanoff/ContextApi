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
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        return state;
      }

    default:
      return state;
  }
};
