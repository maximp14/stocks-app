import { StockState } from "./stock.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: StockState = {
  autocompletedata: [],
  isFetching: false,
  symbolList: [],
  message: null,
  stockHigh: [],
  stockLow: [],
  stockVolume: [],
  selectedInterval: null,
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
    setSelectedSymbol: (state, { payload }) => ({
      ...state,
      selectedSymbol: payload,
    }),
    setStockData: (state, { payload }) => ({
      ...state,
      stockHigh: payload.high,
      stockLow: payload.low,
      stockVolume: payload.volume,
      isFetching: false,
    }),
    setSelectedInterval: (state, { payload }) => ({
      ...state,
      selectedInterval: payload,
    }),
  },
});
