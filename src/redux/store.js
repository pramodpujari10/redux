// import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import rootReducers from "./reducer";
// import handleCart from "./reducer/handleCart"
// const store = configureStore({
//     reducer:{
//         handleCart
//     }
//     )

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import handleCart from "./reducer/handleCart";

export const store = configureStore({
  reducer: {
    handleCart: handleCart,
  },
});
