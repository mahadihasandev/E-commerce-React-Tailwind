import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    currentValue: '',
    previousValue:"",
  },
  reducers: {
    breadCrumb: (state,action) => {
      
     console.log(state);
     
    },
   
  }
})


export const { reduxdataslice } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer