import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { loginUser, setMessage } from "../../../store/user/user.action";

import "./style.css";
import { paths } from "../../../components/paths";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser, message } = useAppSelector((state) => state.user);

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

  function handleEnter() {
    if (!!userName && !!password) {
      dispatch(loginUser({ username: userName, password }));
    }
  }

  return (
    <div className="login__container">
      <h1>Login</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        variant="outlined"
        style={{ margin: "10px" }}
        onClick={handleEnter}
      >
        ENTER
      </Button>
      {message && <Alert severity={message.severity}>{message.text}</Alert>}
    </div>
  );
};

export default LoginPage;
