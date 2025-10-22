import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Steps for RTK Query
// create store
// wrap app component under Provider
// create slice
// register reducer in store