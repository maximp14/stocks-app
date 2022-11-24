import { stockSlice } from "./stock/stockSlice";
import { userSlice } from "./user/userSlice";

export const appReducer = {
  user: userSlice.reducer,
  stock: stockSlice.reducer,
};
