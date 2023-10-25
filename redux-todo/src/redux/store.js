import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./reducer/reducer";

const store = configureStore({
  reducer: {
    todoReducers,
  },
});

export default store;
