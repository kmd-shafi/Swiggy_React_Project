import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

const appstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appstore;
