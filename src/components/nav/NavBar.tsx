import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAppSelector, useAppDispatch } from "../../store/redux-hooks";
import { loginOutUser } from "../../store/user/user.action";

export default function ButtonAppBar() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);
  const { selectedSymbol } = useAppSelector((state) => state.stock);

  function handleLogOutUser() {
    dispatch(loginOutUser());
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedSymbol
              ? `${selectedSymbol.symbol} - ${selectedSymbol.name} - ${selectedSymbol.currency}`
              : "Mis Acciones"}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            {currentUser && currentUser.username}
          </Typography>
          <Button color="inherit" onClick={handleLogOutUser}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
