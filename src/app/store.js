import { configureStore } from "@reduxjs/toolkit";
import rulesReducer from "../features/rulesSlice";
import rendeElementReducer from "../features/renderElementSlice";

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
    renderElement: rendeElementReducer,
  },
});
