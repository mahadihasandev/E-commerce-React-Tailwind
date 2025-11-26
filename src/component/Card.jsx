import React from 'react';
import Image from '../component/Image';
import Flex from './Flex';
import MidList from './MidList';
import SmallList from './SmallList';
import { FaHeart } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {addtocart} from '../Slices/AddToCartSlice'
import { Link } from 'react-router-dom';


function Card({id,src,className,nameText,priceText,colorText,classname2nd}) {

  let dispatch=useDispatch()

  let handleAddToCart=()=>{
    dispatch(addtocart({
      title:nameText,
      price:priceText,
      image:src,
      quantity:1,
    }))  
  }

  return (
    <>
    <div className={`w-full max-w-[370px] mx-auto h-auto min-h-[465px] relative group ${className}`}>
      <div className='absolute bg-black text-white top-3 sm:top-5 left-3 sm:left-5 px-4 sm:px-6 md:px-8 py-1 sm:py-2 text-xs sm:text-sm z-10'>new</div>
        <div className='w-full aspect-square relative overflow-hidden'>            
            <Link to={`/products/${id}`}>
            <Image className='rounded-2xl sm:rounded-3xl w-full h-full object-cover' src={src}/>
            </Link>
            <div className='absolute -bottom-1/3 bg-white opacity-0 h-2/5 w-full 
        left-0 group-hover:bottom-0 group-hover:opacity-90 duration-500 invisible group-hover:visible'>
          <Flex className="flex-col gap-y-3 sm:gap-y-[21px] items-end px-4 sm:px-6 md:px-[30px] py-4 sm:py-5 md:py-[26px]">
            
          <Flex className='items-center gap-x-2 sm:gap-x-[15px]'>
            <SmallList className='text-sm sm:text-[16px]' text='Add to Wish List'/>
            <FaHeart className='text-sm sm:text-base' />
          </Flex>

          <Flex className='items-center gap-x-2 sm:gap-x-[15px]'>
              <SmallList className='text-sm sm:text-[16px]' text='Compare'/>
              <FaSync className='text-sm sm:text-base' />
          </Flex>

            <div onClick={handleAddToCart} >
          <Flex className='items-center gap-x-2 sm:gap-x-[15px]'>
            <MidList className='text-sm sm:text-base' text='Add to Cart'/>
            <FaShoppingCart className='text-sm sm:text-base' />
          </Flex>
          </div>
            
          </Flex>
          
          
          
        </div>
        </div>
        <Link to={`/products/${id}`}>
        <Flex className='justify-between items-center pt-4 sm:pt-6 pb-2 sm:pb-3 px-2 sm:px-0'>
            <MidList className='!text-sm sm:!text-base' text={nameText}/>
            <SmallList className='text-sm sm:text-[16px]' text={priceText}/>
        </Flex>
            <SmallList className='text-sm sm:text-[16px] px-2 sm:px-0' text={colorText}/>
            </Link>
    </div>
    </>
  )
}

export default Card