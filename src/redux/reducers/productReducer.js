import { ActionTypes } from "../constans/actionsTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
