import React from "react";
import { paths } from "./paths";

interface Routes {
  path: string;
  component: any;
}

const SignInPage = React.lazy(() => import("../pages/public/login/SignIn"));
const SignUpPage = React.lazy(() => import("../pages/public/register/SignUp"));

const UserStocks = React.lazy(
  () => import("../pages/private/userStocks/UserStocksPage")
);

const StockDetails = React.lazy(
  () => import("../pages/private/stockDetails/StockDetailsPage")
);

export const routes: Routes[] = [
  {
    path: paths.login,
    component: SignInPage,
  },
  {
    path: paths.register,
    component: SignUpPage,
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
