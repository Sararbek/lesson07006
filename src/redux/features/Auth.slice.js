import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("accessToken") || null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn: (state, {payload}) => {
        state.value = payload
        localStorage.setItem("accessToken", state.value)
    },
    logout: (state) => {
        state.value = null
        localStorage.removeItem("accessToken")
    }
  },
})

export const { logIn, logout } = loginSlice.actions

export default loginSlice.reducer