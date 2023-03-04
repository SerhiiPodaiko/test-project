import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthType } from "./authType"

const initialState: AuthType = {
  isAuth: null,
  user: null,
  password: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthType>) => {
      state.isAuth = action.payload.isAuth
      state.user = action.payload.user
      state.password = action.payload.password
    },
    logOut: (state) => {
      state.isAuth = null
      state.user = null
      state.password = null
    },
  },
})

export const { actions: authActions, reducer: authReducer } = authSlice
