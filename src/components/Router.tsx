import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoadingComponent from "./loading/LoadingComponent";
import { useAppSelector } from "../store/redux-hooks";
import { routes } from "./RouterData";
import { paths } from "./paths";
import LoginPage from "../pages/public/login/LoginPage";

const Router: React.FC = () => {
  const { authenticated } = useAppSelector((state) => state.user);

  function renderLoading() {
    return <LoadingComponent isFetching />;
  }

  return (
    <Suspense fallback={<div>{renderLoading()}</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {routes.map((route, idx) => (
          <Route
            key={`${idx}38138411`}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
