import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TAuthors } from "../../types";
import { getAuthors } from "../../api";

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAuthors();
      const data: TAuthors = await response.data;
      const totalCount = response.headers["x-total-count"];
      console.log(data, "data");

      return { data, totalCount };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
