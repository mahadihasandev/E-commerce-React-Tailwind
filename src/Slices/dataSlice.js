import { createSlice } from '@reduxjs/toolkit'

export const reduxEcomData = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
    reduxdataslice: (state,action) => {
      
      state.value = action.payload
    },
   
  }
})


export const { reduxdataslice } = reduxEcomData.actions

export default reduxEcomData.reducer