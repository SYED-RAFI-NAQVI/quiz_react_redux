import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataState/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
