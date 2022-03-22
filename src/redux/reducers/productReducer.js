import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../constants/actionType";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
