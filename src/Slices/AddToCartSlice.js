import { createSlice } from '@reduxjs/toolkit'

export const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState: {
    cartItem: null,
  },
  reducers: {
    addtocart:( state,actions) => {
      console.log(state.value);
      
      
      state.value=actions.payload
      
    }
  }
})


export const { addtocart} = AddToCartSlice.actions

export default AddToCartSlice.reducer