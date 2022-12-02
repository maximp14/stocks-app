import { Message, User } from "./user.type";
import { userSlice } from "./userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import userService from "../../services/user.service";

export const loginUser = (user: User) => async (dispatch: Dispatch) => {
  dispatch(userSlice.actions.isFetching(true));

  const response = await userService.login(user);

  if (response.statusCode === 404) {
    const message: Message = {
      severity: "error",
      text: response.data.message,
    };
    dispatch(userSlice.actions.setMessage(message));
  } else if (response.statusCode === 200) {
    dispatch(userSlice.actions.setCurrentUser(response.data));
  }
};

export const registerUser = (user: User) => async (dispatch: Dispatch) => {
  dispatch(userSlice.actions.isFetching(true));

  const response = await userService.register(user);

  if (!response) return;

  setTimeout(() => {
    dispatch(userSlice.actions.isFetching(false));
  }, 1500);
};

export const loginOutUser = () => async (dispatch: Dispatch) => {
  dispatch(userSlice.actions.isFetching(true));

  setTimeout(() => {
    dispatch(userSlice.actions.resetProperties());
  }, 300);
};

export const setMessage =
  (message: Message | null) => async (dispatch: Dispatch) => {
    dispatch(userSlice.actions.setMessage(message));
  };
