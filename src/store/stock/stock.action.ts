import { Message, User } from "./../user/user.type";
import { stockSlice } from "./stockSlice";
import { Dispatch } from "@reduxjs/toolkit";
import stockService from "../../services/stock.service";
import { RootState } from "../store";
import { StockSymbol } from "./stock.type";

export const getAutocompleteData = () => async (dispatch: Dispatch) => {
  dispatch(stockSlice.actions.isFetching(true));
  const response = await stockService.autocompleteData();

  if (!response) return;

  dispatch(stockSlice.actions.setAutocompleteData(response.data));
};

export const addSymbol =
  (symbol: StockSymbol) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(stockSlice.actions.isFetching(true));

    const symbolList: StockSymbol[] = getState().stock.symbolList;
    const currentUserId: number | undefined = getState().user.currentUser?.id;

    const symbolsNames = symbolList.map((sym) => sym.symbol);

    if (symbolsNames.includes(symbol.symbol)) {
      dispatch(
        stockSlice.actions.setMessage({
          severity: "warning",
          text: "El símbolo ya se encuentra en la lista",
        })
      );
    } else {
      const response = await stockService.addStockToUser({
        symbol,
        currentUserId,
      });
      if (!response) return;
      const updatedList = updatedState(symbolList, symbol);
      dispatch(stockSlice.actions.setSymbolList(updatedList));
    }
  };

export const setShowMessage =
  (message: Message | null) => async (dispatch: Dispatch) => {
    dispatch(stockSlice.actions.setMessage(message));
  };

export const getUserStocks =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const currentUserId: number | undefined = getState().user.currentUser?.id;

    const response = await stockService.getStocks(currentUserId);

    if (!response) return;

    dispatch(stockSlice.actions.setSymbolList(response));
  };

const updatedState = (list: any, entity: any) => {
  if (list) {
    list = [...list, entity];
  } else {
    list = [entity];
  }
  return list;
};
