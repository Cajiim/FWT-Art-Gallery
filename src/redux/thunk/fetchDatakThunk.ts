import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuthors } from "../../api/api";
/* import type { TFilter } from "../../types"; */

type TFilter = {};

export const fetchAuthors = createAsyncThunk(
  "paintings/fetchPaintings",
  async (urlFilter: TFilter, { rejectWithValue }) => {
    try {
      const response = await fetchAuthors(urlFilter);
      const data = await response.data;
      const totalCount = response.headers["x-total-count"];
      return { data, totalCount };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
