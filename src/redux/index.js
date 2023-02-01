import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import countryReducer from "./slices/countrySlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    countries: countryReducer,
  },
});

export default store;
