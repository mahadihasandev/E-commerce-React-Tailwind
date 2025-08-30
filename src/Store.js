import { configureStore } from '@reduxjs/toolkit'
import BreadCrumbSlice from './Slices/BreadCrumbSlice'
import  AddToCartSlice  from './Slices/AddToCartSlice'

export default configureStore({
  reducer: {
    breadCrumbs:BreadCrumbSlice,
    addToCart:AddToCartSlice,
  }
})