import ActionsTypes from "../constans/actions-types";

export const setProducts = (products) => {
  return {
    type: ActionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionsTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
    payload: [],
  };
};
