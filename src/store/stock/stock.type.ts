import { Message } from "./../user/user.type";
export interface StockState {
  autocompletedata: any[];
  isFetching: boolean;
  symbolList: StockSymbol[];
  message: Message | null;
}

export interface StockSymbol {
  symbol: string;
  name: string;
  currency: string;
  isActive: boolean;
}
