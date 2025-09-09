import { createSlice } from '@reduxjs/toolkit'

export const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState: {
    cartItem: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
  },
  reducers: {
    addtocart:( state,action) => {
        let allData=state.cartItem.find(item=>item.title==action.payload.title)
        if(allData){
          allData.quantity+=1
        }else{
          state.cartItem.push({...action.payload,quantity:1})
        }
        localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
    increment:(state,action)=>{
      state.cartItem.map((item)=>{
        if(item.title==action.payload.title){
          item.quantity=item.quantity+1
        } 

      })
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
    decrement:(state,action)=>{
      state.cartItem.map((item)=>{
        if(item.title==action.payload.title){
          if (item.quantity>1) {
            item.quantity=item.quantity-1
          }
        } 
      })
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
    remove:(state,action)=>{      
      state.cartItem.map((item,index)=>{
        if(item.title==action.payload.title){
          state.cartItem.splice(index,1)
        } 
      })
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    }
  }
  })

export const { addtocart,increment,decrement,remove} = AddToCartSlice.actions
export default AddToCartSlice.reducer