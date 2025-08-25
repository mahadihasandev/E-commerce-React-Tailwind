import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    currentValue:"",
    previousValue:"",
  },
  reducers: {
    breadCrumb: (state,action) => {
     console.log(state.currentValue);
     console.log(state.previousValue);
     
     
    },
   
  }
})


export const { breadCrumb } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer