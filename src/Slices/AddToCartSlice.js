import { createSlice } from '@reduxjs/toolkit'

export const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart:( state,action) => {
        let allData=state.cartItem.find(item=>item.title==action.payload.title)
        if(allData){
          allData.quantity+=1
        }else{
          state.cartItem.push({...action.payload,quantity:1})
        }
    },
    increment:(state,action)=>{
      state.cartItem.map((item)=>{
        if(item.title==action.payload.title){
          item.quantity=item.quantity+1
        } 
      })
    },
    decrement:(state,action)=>{
      state.cartItem.map((item)=>{
        if(item.title==action.payload.title){
          if (item.quantity>1) {
            item.quantity=item.quantity-1
          }
        } 
      })
    }}
  })

export const { addtocart,increment,decrement} = AddToCartSlice.actions
export default AddToCartSlice.reducer