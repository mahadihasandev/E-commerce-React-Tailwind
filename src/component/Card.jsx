import React from 'react';
import Image from '../component/Image';
import Flex from './Flex';
import MidList from './MidList';
import SmallList from './SmallList';
import { FaHeart } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Card({src,className}) {
  return (
    <>
    <div className={`w-[370px] h-[465px] relative group ${className}`}>
      <div className='absolute bg-black text-white top-5 left-5 px-8 py-2'>New</div>
        <div className='w-[370px] h-[370px] relative'>            
            <Image src={src}/>
            <div className='absolute -bottom-1/3 bg-white hidden h-2/5 w-full 
        left-0 group-hover:bottom-0 group-hover:block duration-1000'>
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
            <MidList text='Basic Crew Neck Tee'/>
            <SmallList className='text-[16px]' text='$44.00'/>
        </Flex>
            <SmallList className='text-[16px]' text='Black'/>
    </div>
    </>
  )
}

export default Card