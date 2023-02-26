import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import {api} from "../../../utils/axios"
import {Post} from "./postsType"

export const fetchGetAllPosts = createAsyncThunk<Post[], undefined, {rejectValue: string}>(
    "posts/fetchGetAllPosts",
    async function (_, {rejectWithValue}) {
        try {
            const response = await api.get(`${process.env.REACT_APP_BASE_URL}/posts?_limit=50`)

            if (response.status !== 200) {
                throw new Error("Sever error!")
            }

            return await response.data
        } catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchDeletePost = createAsyncThunk<number, number, {rejectValue: string}>(
    "news/fetchDeletePost",
    async function (id, {rejectWithValue}) {
        const response = await api.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)

        if (response.status !== 200) {
            return rejectWithValue("Can`t delete user. Server Error")
        }

        return id
    }
)

type UsersState = {
    posts: Post[],
    loading: boolean,
    error: null | string,
}

const initialState: UsersState = {
    posts: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGetAllPosts.pending, (state) => {
                state.loading = true
                state.error = null
            })
        builder
            .addCase(fetchGetAllPosts.fulfilled, (state, action:PayloadAction<any>) => {
                state.posts = action.payload
                state.loading = false
            })
        builder
            .addCase(fetchGetAllPosts.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.posts = []
                state.loading = false
            })

        // Delete post
        builder
            .addCase(fetchDeletePost.pending, (state) => {
                state.error = null
            })
        builder
            .addCase(fetchDeletePost.fulfilled, (state, action: PayloadAction<any>) => {
                state.posts = state.posts.filter((user) => user.id !== action.payload)
            })
        builder
            .addCase(fetchDeletePost.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
            })
    }
})

export const {reducer: postsReducer} = usersSlice
