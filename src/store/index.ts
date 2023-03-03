import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { newsReducer } from "./slices/news/newsSlice"
import { usersReducer } from "./slices/users/usersSlice"
import { authReducer } from "./slices/auth/authSlice"

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  news: newsReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
