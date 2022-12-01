import { IntervalInterface } from "./../../utils/interval-options";
import { Message } from "./../user/user.type";
export interface StockState {
  autocompletedata: any[];
  isFetching: boolean;
  symbolList: StockSymbol[];
  selectedSymbol?: StockSymbol;
  message: Message | null;
  stockHigh: any[];
  stockLow: any[];
  stockVolume: any[];
  selectedInterval: IntervalInterface | null;
}

export interface StockSymbol {
  symbol: string;
  name: string;
  currency: string;
  isActive: boolean;
}
