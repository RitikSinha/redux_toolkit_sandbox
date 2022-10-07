import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CouterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
