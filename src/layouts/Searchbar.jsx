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
import { Link, useParams } from 'react-router-dom';
import { RxButton } from 'react-icons/rx';
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
    <section className='bg-lightGray py-6 '>
        <Container>
            <Flex className='items-center mx-4 md:mx-0 mt-10 md:mt-0 lg:mt-0'>
                <div className='w-[10%] md:w-[27%]'>
                <Flex className="items-center gap-2"><Image className="h-[7px] w-[14px] md:h-[10px] md:w-[19px]" src={SeIcon}/>
                <p className='hidden md:block font-DMs text-lg font-normal'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-[70%] md:w-[46%] relative'>
                <input className='w-full border-none bg-white py-4 px-7 rounded-lg 
                placeholder:font-DMs placeholder:text-[10px] placeholder:md:text-[14px] 
                placeholder:font-normal' type="text" placeholder='Search Product'/>
                <FaSearch onClick={()=>{window.open("https://www.google.com","_blank")}} className='text-sm md:text-base absolute top-1/2 right-[17px] -translate-y-1/2' />
                </div>

                <div className='w-[20%] md:w-[27%]'>
                <Flex className="items-center justify-end md:gap-x-10">
                      <div className='flex md:gap-x-2.5'>
                        <FaUser className='text-sm md:text-2xl'/>
                      <TiArrowSortedDown className= 'text-base md:text-2xl'/>
                      </div>
                      <div onClick={handleCart}>
                        <FaShoppingCart  className='md:text-2xl'/>
                        </div>
                </Flex>
                {
              showcart && <div className='w-1/3 pb-20 rounded-2xl bg-deepDark absolute top-0 right-0 z-20'>
                <ImCross className='text-red-700 my-4 mx-6' onClick={() => setShowCart(!showcart)} />
                       <ul className='flex items-center justify-between px-5 py-5 bg-deepDark text-lightGray text-xl font-semibold border-b border-lightGray'>
                  <li>Action:</li>
                  <li>Product:</li>
                  <li>Price:</li>
                  <li>Quantity:</li>
                  <li>Subtotal:</li>
                </ul>
                <ul className='flex items-center mr-16 justify-between px-7 py-3 bg-deepDark text-lightGray border-b border-lightGray cursor-pointer'>
                            <li ><ImCross className='text-xs text-red-700' /></li>
                            <li>....</li>
                            <li >$</li>
                            <li className='border border-lightGray rounded-lg py-2 px-8 flex gap-x-3'>
                              <span ><PiPlus/></span>
                              <span></span>
                              <span ><PiMinus/></span>
                            </li>
                            
                          </ul>


                  {     cartItem.length>0
                        ?  
                        cartItem.map((item)=>(
                          <ul className='flex items-center justify-between px-5 py-3 bg-deepDark text-white border-b border-lightGray cursor-pointer'>
                          <li><IoMdCloseCircle onClick={()=>{dispatch(remove(item))}} className='text-red-700 text-2xl'/></li>
                          <li className='text-lightGray'>{item.title}</li>
                          <li className='text-lightGray'>{item.price}</li>
                          <li className='text-lightGray flex items-center gap-x-3 py-1 px-5 border rounded-lg border-lightGray'>
                            < PiPlus onClick={()=>{handleIncrement(item)}}/>
                            {item.quantity}
                            <PiMinus onClick={()=>{handleDecrement(item)}}/>
                            
                            </li>
                          <li>{item.price*item.quantity}</li>
                          </ul>
                        ))
                        :
                        <MidList className='text-lightGray text-center pt-10' text='Cart is Empty'/>
                  }

                  <MidList className='text-lightGray text-end pt-10 pr-10' text={`Total:${total}`}/>
                    <>
                      <div className=" flex items-center mt-20 justify-center gap-x-4">
                        
                        <Link to='/cart'><Button className='bg-lightGray rounded-xl !text-deepDark hover:!text-lightGray hover:!border-lightGray' text="View Cart" /></Link>
                        <Link to='/checkout'><Button className='bg-lightGray rounded-xl !text-deepDark hover:!text-lightGray hover:!border-lightGray' text="Checkout" /></Link>

                      </div>
                    </>
                <div className='absolute bottom-6 right-6 text-lightGray text-2xl font-dm font-bold'>Total :</div>
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