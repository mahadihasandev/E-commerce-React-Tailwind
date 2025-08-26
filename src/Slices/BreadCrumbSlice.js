import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    currentValue:"",
    previousValue:"",
  },
  reducers: {
    breadCrumb: (state,action) => {
      state.twoTimeAgo=state.previousValue
      state.previousValue=state.currentValue
      state.currentValue=action.payload
    },
   
  }
})


export const { breadCrumb } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer