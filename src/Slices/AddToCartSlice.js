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
    }
    }
  })


export const { addtocart} = AddToCartSlice.actions

export default AddToCartSlice.reducer