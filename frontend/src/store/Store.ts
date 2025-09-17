import { configureStore } from "@reduxjs/toolkit";
import { apiSlices } from "./slice/apiSlice";


export const store = configureStore({
  reducer: {
    [apiSlices.reducerPath]: apiSlices.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlices.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
