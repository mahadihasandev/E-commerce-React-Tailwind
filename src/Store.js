import { configureStore } from '@reduxjs/toolkit'
import BreadCrumbSlice from './Slices/BreadCrumbSlice'

export default configureStore({
  reducer: {
    breadCrumbs:BreadCrumbSlice,
  }
})