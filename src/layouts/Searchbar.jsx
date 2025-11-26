import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import SeIcon from '../assets/seIcon.png'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import Button from '../component/Button';
import { Link } from 'react-router-dom';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { IoMdCloseCircle, IoMdCloseCircleOutline } from "react-icons/io";
import {increment,decrement,remove} from '../Slices/AddToCartSlice'
import MidList from '../component/MidList'


function Searchbar() {

let cartItem=useSelector(state=>state.addToCart.cartItem)

const [showcart,setShowCart]=useState(false)
const [total,setTotal]=useState(0)


   let dispatch=useDispatch()
let handleDecrement=(item)=>{
dispatch(decrement(item))

}

let handleIncrement=(item)=>{
  dispatch(increment(item))
  
  
  
}

useEffect(()=>{
  let Total=0;
  cartItem.map((item)=>{
  Total+=item.price*item.quantity
    
    
  })
   setTotal(Number(Total.toFixed(2)))
},[cartItem])

let handleCart=()=>{
  setShowCart(true)
  
}

  return (
    <>
    <section className='bg-lightGray py-4 sm:py-5 md:py-6'>
        <Container>
            <Flex className='items-center flex-col sm:flex-row gap-3 sm:gap-4 md:gap-0'>
                <div className='w-full sm:w-auto sm:flex-1 md:w-[27%]'>
                <Flex className="items-center gap-2 justify-start"><Image className="h-[7px] w-[14px] sm:h-[8px] sm:w-[16px] md:h-[10px] md:w-[19px]" src={SeIcon}/>
                <p className='hidden sm:block font-DMs text-sm sm:text-base md:text-lg font-normal'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-full sm:w-auto sm:flex-1 md:w-[46%] relative'>
                <input className='w-full border-none bg-white py-3 sm:py-4 px-4 sm:px-6 md:px-7 rounded-lg 
                placeholder:font-DMs placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-[14px] 
                placeholder:font-normal text-sm sm:text-base' type="text" placeholder='Search Product'/>
                <FaSearch onClick={()=>{window.open("https://www.google.com","_blank")}} className='text-sm sm:text-base absolute top-1/2 right-3 sm:right-4 md:right-[17px] -translate-y-1/2 cursor-pointer' />
                </div>

                <div className='w-full sm:w-auto sm:flex-1 md:w-[27%] relative'>
                <Flex className="items-center justify-center sm:justify-end gap-x-4 sm:gap-x-6 md:gap-x-10">
                      <div className='flex gap-x-2 sm:gap-x-2.5'>
                        <FaUser className='text-lg sm:text-xl md:text-2xl cursor-pointer'/>
                      <TiArrowSortedDown className= 'text-lg sm:text-xl md:text-2xl cursor-pointer'/>
                      </div>
                      <div onClick={handleCart} className='relative'>
                        <FaShoppingCart className='text-lg sm:text-xl md:text-2xl cursor-pointer'/>
                        {cartItem.length > 0 && (
                          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cartItem.length}</span>
                        )}
                        </div>
                </Flex>
                {
              showcart && (
                <>
                  <div className='fixed inset-0 bg-black bg-opacity-50 z-30' onClick={() => setShowCart(false)}></div>
                  <div className='w-[90vw] sm:w-[80vw] md:w-[400px] lg:w-[500px] max-h-[80vh] overflow-y-auto pb-20 rounded-2xl bg-deepDark absolute top-full right-0 mt-2 z-40 shadow-2xl'>
                <ImCross className='text-red-700 my-4 mx-6 cursor-pointer float-right' onClick={() => setShowCart(!showcart)} />
                <div className='clear-both'></div>
                       <ul className='hidden sm:grid grid-cols-5 items-center justify-between px-3 sm:px-5 py-3 sm:py-5 bg-deepDark text-lightGray text-xs sm:text-sm md:text-base font-semibold border-b border-lightGray'>
                  <li className='truncate'>Action</li>
                  <li className='truncate'>Product</li>
                  <li className='truncate'>Price</li>
                  <li className='truncate'>Qty</li>
                  <li className='truncate'>Total</li>
                </ul>
                


                  {     cartItem.length>0
                        ?  
                        cartItem.map((item, index)=>(
                          <div key={index} className='flex flex-col sm:grid sm:grid-cols-5 items-start sm:items-center justify-between px-3 sm:px-5 py-3 bg-deepDark text-white border-b border-lightGray gap-2 sm:gap-0'>
                          <div className='flex items-center gap-2 sm:block'>
                            <IoMdCloseCircle onClick={()=>{dispatch(remove(item))}} className='text-red-700 text-xl sm:text-2xl cursor-pointer'/>
                            <span className='sm:hidden text-lightGray text-xs'>Action</span>
                          </div>
                          <div className='flex flex-col sm:block'>
                            <span className='sm:hidden text-lightGray text-xs mb-1'>Product:</span>
                            <span className='text-lightGray text-sm sm:text-base truncate'>{item.title}</span>
                          </div>
                          <div className='flex flex-col sm:block'>
                            <span className='sm:hidden text-lightGray text-xs mb-1'>Price:</span>
                            <span className='text-lightGray text-sm sm:text-base'>${item.price}</span>
                          </div>
                          <div className='flex flex-col sm:block'>
                            <span className='sm:hidden text-lightGray text-xs mb-1'>Quantity:</span>
                            <div className='text-lightGray flex items-center gap-x-2 sm:gap-x-3 py-1 px-3 sm:px-5 border rounded-lg border-lightGray'>
                            <PiPlus onClick={()=>{handleIncrement(item)}} className='cursor-pointer'/>
                            <span>{item.quantity}</span>
                            <PiMinus onClick={()=>{handleDecrement(item)}} className='cursor-pointer'/>
                            </div>
                          </div>
                          <div className='flex flex-col sm:block'>
                            <span className='sm:hidden text-lightGray text-xs mb-1'>Subtotal:</span>
                            <span className='text-white font-semibold'>${(item.price*item.quantity).toFixed(2)}</span>
                          </div>
                          </div>
                        ))
                        :
                        <MidList className='text-lightGray text-center pt-10' text='Cart is Empty'/>
                  }

                  <div className='px-5 py-4'>
                    <MidList className='text-lightGray text-end sm:text-right pt-4 sm:pt-6 text-base sm:text-lg font-semibold' text={`Total: $${total.toFixed(2)}`}/>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-6 sm:mt-8 justify-center gap-3 sm:gap-4">
                        <Link to='/cart' onClick={() => setShowCart(false)}><Button className='bg-lightGray rounded-xl !text-deepDark hover:!text-lightGray hover:!border-lightGray w-full sm:w-auto' text="View Cart" /></Link>
                        <Link to='/checkout' onClick={() => setShowCart(false)}><Button className='bg-lightGray rounded-xl !text-deepDark hover:!text-lightGray hover:!border-lightGray w-full sm:w-auto' text="Checkout" /></Link>
                    </div>
                  </div>
              </div>
                </>
              )

            }
                </div>

            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Searchbar