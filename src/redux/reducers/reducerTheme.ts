import { createSlice } from "@reduxjs/toolkit";

type TThemeState = {
  chosenTheme: {
    dark?: string;
  };
};
const initialState: TThemeState = {
  chosenTheme: {
    dark: "false",
  },
};

const themeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.chosenTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
