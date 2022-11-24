import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

interface LoadingComponentProps {
  isFetching: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ isFetching }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isFetching}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default LoadingComponent;
