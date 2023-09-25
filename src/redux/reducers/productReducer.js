const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

// state'in nasıl değişceğine karar verir
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
