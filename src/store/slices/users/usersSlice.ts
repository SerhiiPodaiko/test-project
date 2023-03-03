import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "./userType"
import { api } from "../../../utils/axios"

export const fetchGetAllUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>
("news/fetchGetAllUsers", async function (_, { rejectWithValue }) {
  try {
    const response = await api.get(`${process.env.REACT_APP_BASE_URL}/users`)

    if (response.status !== 200) {
      throw new Error("Sever error!")
    }

    return await response.data
  } catch (e: any) {
    return rejectWithValue(e.message)
  }
})

type UsersState = {
  users: User[]
  loading: boolean
  error: null | string
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllUsers.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(
      fetchGetAllUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload
        state.loading = false
      },
    )
    builder.addCase(
      fetchGetAllUsers.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload
        state.loading = false
        state.users = []
      },
    )
  },
})

export const { reducer: usersReducer } = usersSlice
