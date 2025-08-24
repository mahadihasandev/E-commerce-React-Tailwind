import { configureStore } from '@reduxjs/toolkit'
import dataSlice from "./Slices/dataSlice"

export default configureStore({
  reducer: {
    sitedata:dataSlice
  }
})