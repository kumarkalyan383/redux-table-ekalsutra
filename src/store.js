import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./features/Table/TableSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
