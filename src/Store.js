import { configureStore } from '@reduxjs/toolkit'
import dataSlice from "./Slices/dataSlice"
import BreadCrumbSlice from './Slices/BreadCrumbSlice'


export default configureStore({
  reducer: {
    sitedata:dataSlice,
    breadCrumb:BreadCrumbSlice,
  }
})