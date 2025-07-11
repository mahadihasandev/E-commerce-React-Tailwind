import React from 'react';
import Image from '../component/Image';
import Flex from './Flex';
import MidList from './MidList';
import SmallList from './SmallList';
import { FaHeart } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Card({src,className,nameText,priceText,colorText}) {
  return (
    <>
    <div className={`w-[370px] h-[465px] relative group ${className}`}>
      <div className='absolute bg-black text-white top-5 left-5 px-8 py-2'>New</div>
        <div className='w-[370px] h-[370px] relative'>            
            <Image src={src}/>
            <div className='absolute -bottom-1/3 bg-white opacity-0 h-2/5 w-full 
        left-0 group-hover:bottom-0 group-hover:opacity-90 duration-500 invisible group-hover:visible'>
          <Flex className="flex-col gap-y-[21px] items-end px-[30px] py-[26px]">
            
          <Flex className='items-center gap-x-[15px]'>
            <SmallList className='text-[16px]' text='Add to Wish List'/>
            <FaHeart />
          </Flex>

          <Flex className='items-center gap-x-[15px]'>
              <SmallList className='text-[16px]' text='Compare'/>
              <FaSync />
          </Flex>

          <Flex className='items-center gap-x-[15px]'>
            <MidList className='text-base' text='Add to Cart'/>
            <FaShoppingCart />
          </Flex>
            
          </Flex>
          
          
          
        </div>
        </div>
        
        <Flex className='justify-between pt-6 pb-3'>
            <MidList text={nameText}/>
            <SmallList className='text-[16px]' text={priceText}/>
        </Flex>
            <SmallList className='text-[16px]' text={colorText}/>
    </div>
    </>
  )
}

export default Card