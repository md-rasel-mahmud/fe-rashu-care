import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: {
    name: string;
    email: string;
  };
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },

    clearUser: (state) => {
      state.user.name = "";
      state.user.email = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
