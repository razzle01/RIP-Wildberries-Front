import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;