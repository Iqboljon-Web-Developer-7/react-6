import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import cartSlice from "./slices/cart-slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,

    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
