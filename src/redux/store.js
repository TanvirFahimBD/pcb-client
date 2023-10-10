import { configureStore } from "@reduxjs/toolkit";
import selectPartsReducer from "./features/selectPartsSlice";

export const store = configureStore({
  reducer: {
    selectParts: selectPartsReducer,
  },
});
