import { StockState } from "./stock.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: StockState = {
  autocompletedata: [],
  isFetching: false,
  symbolList: [],
  message: null,
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    isFetching: (state, { payload }) => ({
      ...state,
      isFetching: payload,
    }),
    setAutocompleteData: (state, { payload }) => ({
      ...state,
      autocompletedata: payload,
      isFetching: false,
    }),
    setSymbolList: (state, { payload }) => ({
      ...state,
      symbolList: payload,
      isFetching: false,
    }),
    setMessage: (state, { payload }) => ({
      ...state,
      message: payload,
    }),
  },
});
