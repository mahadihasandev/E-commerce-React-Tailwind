import { configureStore } from '@reduxjs/toolkit'
import dataSlice from "./Slices/dataSlice"
import BreadCrumbs from './component/BreadCrumbs'

export default configureStore({
  reducer: {
    sitedata:dataSlice,
    breadCrumb:BreadCrumbs,
  }
})