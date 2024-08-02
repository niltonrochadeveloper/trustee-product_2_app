import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  token: string;
}

const initialState: AuthState = {
  user: [],
  token: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<any>>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setSignOf: () => initialState,
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
