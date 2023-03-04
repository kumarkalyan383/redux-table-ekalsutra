import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  names: [],
};

const url = "https://jsonplaceholder.typicode.com/users";

export const getNames = createAsyncThunk("table/getNames", () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
    });
});

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: {
    [getNames.pending]: (state) => {
      state.isLoading = true;
    },
    [getNames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.names = action.payload;
    },
    [getNames.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default tableSlice.reducer;
