import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.type";

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  authenticated: false,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isFetching: (state, { payload }) => ({
      ...state,
      isFetching: payload,
    }),
    setMessage: (state, { payload }) => ({
      ...state,
      message: payload,
    }),
    setCurrentUser: (state, { payload }) => ({
      ...state,
      currentUser: payload,
      authenticated: true,
      isFetching: false,
    }),
    resetProperties: (state) => ({
      ...state,
      currentUser: null,
      isFetching: false,
      message: null,
    }),
  },
});
