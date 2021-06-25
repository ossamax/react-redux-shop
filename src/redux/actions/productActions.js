import { actionsTypes } from "../constans/actionsTypes";

export const setProducts = (products) => {
  return {
      type: actionsTypes.SET_PRODUCTS,
      payload: products
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionsTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
