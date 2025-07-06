import React from 'react';
import Container from'../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import ProductOne from '../assets/product1.png';
import ProductTwo from '../assets/product2.png';
import ProductThree from '../assets/product3.png';
import ProductFour from '../assets/product4.png';
import CommonHeading from '../component/CommonHeading';
import MidList from '../component/MidList';
import SmallList from '../component/SmallList'
import { FaStar } from "react-icons/fa6";

function ProductDetails() {
  return (
    <>
    <Container>
      <Flex className="flex-wrap gap-10">
        <Image src={ProductOne}/>
        <Image src={ProductTwo}/>
        <Image src={ProductThree}/>
        <Image src={ProductFour}/>
      </Flex>
      <CommonHeading className='pt-16 pb-4' text='Product'/>
      <Flex className='gap-x-6 items-center'>
        <Flex className='gap-x-2'>
        <FaStar className='text-[#FFD700]'/>
        <FaStar className='text-[#FFD700]'/>
        <FaStar className='text-[#FFD700]'/>
        <FaStar className='text-[#FFD700]'/>
        <FaStar className='text-[#FFD700]'/>
      </Flex>
      <p className='text-lightDark text-sm font-DMs font-normal'>1 Review</p>
      </Flex>
      <Flex className='text-center gap-[22px]'>
        <SmallList text='$88.00'/>
        <SmallList className='!font-extrabold' text='$44.00'/>
        
      </Flex>
      
    </Container>
    
    </>
  )
}

export default ProductDetails