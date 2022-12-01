import React from "react";
import { paths } from "./paths";

interface Routes {
  path: string;
  component: any;
}

const LoginPage = React.lazy(() => import("../pages/public/login/LoginPage"));

const UserStocks = React.lazy(
  () => import("../pages/private/userStocks/UserStocksPage")
);

const StockDetails = React.lazy(
  () => import("../pages/private/stockDetails/StockDetailsPage")
);

export const routes: Routes[] = [
  {
    path: paths.login,
    component: LoginPage,
  },
  {
    path: paths.userStock,
    component: UserStocks,
  },
  {
    path: paths.stockDetail,
    component: StockDetails,
  },
];
