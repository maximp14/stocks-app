import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { loginUser, setMessage } from "../../../store/user/user.action";
import { paths } from "../../../components/paths";
import LoadingComponent from "../../../components/loading/LoadingComponent";

const SignIn: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser, message, isFetching } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!!currentUser) {
      navigate(paths.userStock);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!!message) {
      setTimeout(() => {
        dispatch(setMessage(null));
      }, 3000);
    }
  }, [message]);

  function handleSignIn() {
    if (!!userName && !!password) {
      dispatch(loginUser({ username: userName, password }));
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoFocus
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <LoadingComponent isFetching={isFetching} />
    </Container>
  );
};

export default SignIn;
