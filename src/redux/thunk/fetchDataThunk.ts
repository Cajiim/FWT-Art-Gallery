import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api";
import type { TAuthors } from "../../types";
import axios from "axios";

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}artists/static`);
      const data: TAuthors = await response.data;
      const totalCount = response.headers["x-total-count"];
      return { data, totalCount };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
