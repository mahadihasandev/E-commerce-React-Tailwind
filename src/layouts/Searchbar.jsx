import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import SeIcon from '../assets/seIcon.png'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import Button from '../component/Button';
import { Link } from 'react-router-dom';
import { RxButton } from 'react-icons/rx';
import { PiMinus, PiPlus } from 'react-icons/pi';
import {increment,decrement} from '../Slices/AddToCartSlice'

function Searchbar() {
let cartItem=useSelector(state=>state.addToCart.cartItem)
const [showcart,setShowCart]=useState(false)
   let dispatch=useDispatch()
let handleDecrement=(item)=>{
dispatch(decrement(item))

}

let handleIncrement=(item)=>{
  dispatch(increment(item))
  
  
  
}
let handleCart=()=>{
  setShowCart(true)
  
}

  return (
    <>
    <section className='bg-lightGray py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-[27%]'>
                <Flex className="items-center gap-2"><Image className="h-[10px] w-[19px]" src={SeIcon}/>
                <p className='font-DMs text-lg font-normal'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-[46%] relative'>
                <input className='w-full border-none bg-white py-4 px-7 rounded-lg 
                placeholder:font-DMs placeholder:text-[14px] 
                placeholder:font-normal' type="text" placeholder='Search Product'/>
                <FaSearch onClick={()=>{window.open("https://www.google.com","_blank")}} className='absolute top-1/2 right-[17px] -translate-y-1/2' />
                </div>

                <div className='w-[27%]'>
                <Flex className="items-center justify-end gap-x-10">
                      <div className='flex gap-x-2.5'>
                        <FaUser className='text-2xl'/>
                      <TiArrowSortedDown className='text-2xl'/>
                      </div>
                      <div onClick={handleCart}>
                        <FaShoppingCart  className='text-2xl'/>
                        </div>
                </Flex>
                {
              showcart && <div className='w-1/3 h-screen rounded-2xl bg-deepDark absolute top-0 right-0 z-20'>
                <ImCross className='text-white my-4 mx-6' onClick={() => setShowCart(!showcart)} />
                       <ul className='flex items-center justify-between px-5 py-5 bg-deepDark text-white text-xl font-semibold border border-white'>
                  <li>Action:</li>
                  <li>Product:</li>
                  <li>Price:</li>
                  <li>Quantity:</li>
                  <li>Subtotal:</li>
                </ul>
                <ul className='flex items-center justify-between px-5 py-3 bg-black text-white border border-white cursor-pointer'>
                            <li ><ImCross className='text-xs ml-6' /></li>
                            <li>....</li>
                            <li>$</li>
                            <li className='border border-white py-2 px-8 flex gap-x-3'>
                              <span >-</span>
                              <span></span>
                              <span >+</span>
                            </li>
                            <li></li>
                          </ul>


                  {
                        cartItem.map((item)=>(
                          <ul className='flex items-center justify-between px-5 py-3 bg-black text-white border border-white cursor-pointer'>
                          <li className='text-white'>{item.title}</li>
                          <li className='text-white'>{item.price}</li>
                          <li className='text-white flex items-center gap-x-3 py-1 px-5 border border-white'>
                            < PiPlus onClick={()=>{handleIncrement(item)}}/>
                            {item.quantity}
                            <PiMinus onClick={()=>{handleDecrement(item)}}/>
                            
                            </li>
                          <li>{item.price*item.quantity}</li>
                          </ul>
                        ))
                  }

               
              

                    <>
                      
                        
                          
                        
                      
                      <div className=" flex items-center mt-20 justify-center gap-x-4">
                        <Link to='/cart'><Button className='bg-white !text-black hover:!text-white hover:!border-white' text="View Cart" /></Link>
                        <Link to='/checkout'><Button className='bg-white !text-black hover:!text-white hover:!border-white' text="Checkout" /></Link>

                      </div>
                    </>

                    
                    <h1 className='text-white text-2xl font-bold font-dm text-center pt-[200px]'>Cart is Empty</h1>

                
                <div className='absolute bottom-6 right-6 text-white text-2xl font-dm font-bold'>Total :</div>

              </div>

            }
                </div>

            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Searchbar