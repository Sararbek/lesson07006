import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './api/Index'
import loginSliceReducer from "./features/Auth.slice"

export const store = configureStore({
  reducer: {
    loginSliceReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})