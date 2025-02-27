import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/PasteSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})