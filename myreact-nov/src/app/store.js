import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/posts/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})