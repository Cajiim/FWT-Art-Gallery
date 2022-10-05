import { createSlice } from "@reduxjs/toolkit";
import type { TAuthors } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAuthors } from "../thunk/fetchDataThunk";

type TInitial = {
  dataAuthors: TAuthors[];
  totalCount: number;
  isLoading: boolean;
  isError: boolean;
  errorText: string;
};

type TResponseData = {
  data: TAuthors[];
  totalCount: number;
};

const initialState: TInitial = {
  dataAuthors: [],
  totalCount: 0,
  isLoading: false,
  isError: false,
  errorText: "",
};

const paintingSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuthors.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchAuthors.fulfilled.type]: (
      state,
      action: PayloadAction<TResponseData>
    ) => {
      state.isLoading = false;
      state.dataAuthors = action.payload.data;
      state.totalCount = action.payload.totalCount;
    },
    [fetchAuthors.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorText = action.payload;
    },
  },
});

export default paintingSlice.reducer;
