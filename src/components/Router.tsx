import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoadingComponent from "./loading/LoadingComponent";
import { useAppSelector } from "../store/redux-hooks";
import { routes } from "./RouterData";

const Router: React.FC = () => {
  const { authenticated } = useAppSelector((state) => state.user);

  function renderLoading() {
    return <LoadingComponent isFetching={true} />;
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
