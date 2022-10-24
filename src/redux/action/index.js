import { ADDCART, DELITEM } from "./types";

// ADD Item to Cart

export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};
// DELETE Item from Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
