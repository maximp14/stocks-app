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

export const routes: Routes[] = [
  {
    path: paths.login,
    component: LoginPage,
  },
  {
    path: paths.userStock,
    component: UserStocks,
  },
];
