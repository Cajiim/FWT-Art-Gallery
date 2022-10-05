import { configureStore } from "@reduxjs/toolkit";
import reducerData from "./reducers/reducerData";
import reducerTheme from "./reducers/reducerTheme";

const store = configureStore({
  reducer: {
    data: reducerData,
    currTheme: reducerTheme,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
