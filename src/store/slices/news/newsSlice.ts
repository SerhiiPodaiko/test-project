import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../../utils/axios"
import { NewsType } from "./newsType"

export const fetchGetAllNews = createAsyncThunk<NewsType[], number, { rejectValue: string }>
  ("news/fetchGetAllNews", async function (currentPage, { rejectWithValue }) {
  try {
    const response = await api.get(
      `${process.env.REACT_APP_BASE_URL}/posts?_limit=10&_page=${currentPage}`,
    )

    if (response.status !== 200) {
      throw new Error("Sever error!")
    }

    return await response.data
  } catch (e: any) {
    return rejectWithValue(e.message)
  }
})

export const fetchDeleteNews = createAsyncThunk<number, number, { rejectValue: string }>
  ("news/fetchDeleteNews", async function (id, { rejectWithValue }) {
  const response = await api.delete(
    `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
  )

  if (response.status !== 200) {
    return rejectWithValue("Can`t delete user. Server Error")
  }

  return id
})

type UsersState = {
  news: NewsType[]
  loading: boolean
  error: null | string
}

const initialState: UsersState = {
  news: [],
  loading: false,
  error: null,
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    resetNews: (state) => {
      state.news = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllNews.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(
      fetchGetAllNews.fulfilled,
      (state, action: PayloadAction<NewsType[]>) => {
        state.loading = false
        state.news = [...state.news, ...action.payload]
      },
    )
    builder.addCase(
      fetchGetAllNews.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload
        state.news = []
        state.loading = false
      },
    )

    // Delete post
    builder.addCase(fetchDeleteNews.pending, (state) => {
      state.error = null
    })
    builder.addCase(
      fetchDeleteNews.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.news = state.news.filter((user) => user.id !== action.payload)
      },
    )
    builder.addCase(
      fetchDeleteNews.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload
        state.loading = false
      },
    )
  },
})

export const { actions: newsActions, reducer: newsReducer } = newsSlice
