import React, { useState } from 'react';
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
import { FaPlus, FaStar } from "react-icons/fa6";
import Button from '../component/Button';
import BreadsCrumbs from '../component/BreadsCrumbs';

function ProductDetails() {
const [star1,setStar1]=useState(false);
const [star2,setStar2]=useState(false);
const [star3,setStar3]=useState(false);
const [star4,setStar4]=useState(false);
const [star5,setStar5]=useState(false);

  let handleStar1=()=>{
      setStar1(!star1)
  }
  let handleStar2=()=>{
    setStar2(!star2)
    setStar1(!star1)
    
  }
  let handleStar3=()=>{
    setStar3(!star3)
    setStar2(!star2)
    setStar1(!star1)
    
  }
  let handleStar4=()=>{
    setStar4(!star4)
    setStar3(!star3)
    setStar2(!star2)
    setStar1(!star1)
    
  }
  let handleStar5=()=>{
    setStar5(!star5)
    setStar4(!star4)
    setStar3(!star3)
    setStar2(!star2)
    setStar1(!star1)
  
  }
  return (
    <>
    <Container>
      <BreadsCrumbs/>
      <Flex className="flex-wrap gap-10">
        <Image src={ProductOne}/>
        <Image src={ProductTwo}/>
        <Image src={ProductThree}/>
        <Image src={ProductFour}/>
      </Flex>
      <CommonHeading className='pt-16 pb-4' text='Product'/>
      <Flex className='gap-x-6 items-center'>
        <Flex className='gap-x-2'>
        <FaStar onClick={handleStar1} className={star1?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar2} className={star2?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar3} className={star3?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar4} className={star4?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar5} className={star5?'text-[#FFD700]':'text-[#B6B6B6]'}/>
      </Flex>
      <p className='text-lightDark text-sm font-DMs font-normal'>1 Review</p>
      </Flex>
      <div className='w-1/2 border-[#D8D8D8] border-b py-6'>
        <Flex className='text-center gap-[22px]'>
        <SmallList text='$88.00'/>
        <SmallList className='!font-extrabold' text='$44.00'/>
        
      </Flex>
      </div>

      <div className='w-1/2 border-[#D8D8D8] border-b py-6'>
      <Flex className='gap-x-14 items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='COLOR'/>
        <Flex className='items-center gap-x-4'>
          <div className='bg-[#97979772] h-5 w-5 rounded-full'></div>
          <div className='bg-[#FF8686] h-5 w-5 rounded-full'></div>
          <div className='bg-[#7dd32181] h-5 w-5 rounded-full'></div>
          <div className='bg-[#B6B6B6] h-5 w-5 rounded-full'></div>
          <div className='bg-[#15CBA5] h-5 w-5 rounded-full'></div>
        </Flex>
      </Flex>

      <Flex className='gap-x-[76px] items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='SIZE'/>
        <Flex className='items-center gap-x-4'>
         <select className='w-[100px] border'>
          <option value="">S</option>
          <option value="">L</option>
          <option value="">XXL</option>
          
         </select>
        </Flex>
      </Flex>

      <Flex className='gap-x-[29px] items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='QUANTITY'/>
        <Flex className='items-center gap-x-4'>
         <Flex className='w-[139px] h-[36px] border border-[#F0F0F0] justify-evenly items-center'>
            <div className=''>+</div>
            <div className=''>1</div>
            <div className=''>-</div>
         </Flex>
        </Flex>
      </Flex>
      </div>

      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='gap-x-14 items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='STATUS'/>
       <SmallList text='IN STOCK'/>
      </Flex>
      </div>

      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='gap-x-5 items-center py-7'>
        <Button text='Add to Wish List'/>
       <Button text='Add To Cart'/>
      </Flex>
      </div>

      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='justify-between items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='FEATURES & DETAILS'/>
        <FaPlus />

      </Flex>
      </div>

      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='justify-between items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='SHIPPING & RETURNS'/>
        <FaPlus />
      </Flex>
      </div>

       <div className='w-1/2 border-[#D8D8D8] pb-[123px] py-4'>    
        <SmallList text=' typically includes several key factors.
                  structured list you can think of as a "Goodness Quota" for an eCommerce
                   building or comparing platforms (like Laravel vs MERN), these factors can help you evaluate which one can deliver these features more easily or robustly'/>  
      </div>

    <div className='w-full border-[#D8D8D8]  border-b py-4'> 
        <Flex className='gap-x-10'>
          <SmallList className='!font-extrabold text-base' text='Description'/>
          <SmallList className='!font-extrabold !text-black text-base' text='Reviews (1)'/>
        </Flex>    
      </div>

      <div className='w-full border-[#D8D8D8] pb-4 border-b py-4'> 
          <SmallList text='Good product great quality'/>   
      </div>

      <div className='w-full border-[#D8D8D8] pb-4 border-b py-4'> 
        <Flex className='gap-x-10 items-center justify-between'>
          <div className='flex items-center gap-x-10'>
          <SmallList className='text-black' text='Jhon Ford'/>
          <Flex className='gap-x-2'>
        <FaStar onClick={handleStar1} className={star1?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar2} className={star2?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar3} className={star3?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar4} className={star4?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar5} className={star5?'text-[#FFD700]':'text-[#B6B6B6]'}/>
      </Flex>
      </div>
      <SmallList text="6 month ago"/>       
        </Flex> 
        <SmallList className='pt-4' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt 
        assumenda accusamus 
        tempore tempora illum. Quia architecto facere reprehenderit deleniti! Accusamus."/>
      </div>
      
        <div className='w-full border-[#D8D8D8] pt-8 pb-4 py-12'> 
          <MidList text='Add a Review'/>   
      </div>

       <div className='w-full border-[#D8D8D8] pt-8 pb-4 border-b py-4'> 
        <label className='text-black' htmlFor="">Name:
          <input className='w-full block py-4 border-[#D8D8D8]' type="text" placeholder='Your Name'/>
          </label>   
      </div>

       <div className='w-full border-[#D8D8D8] pt-8 pb-4 border-b py-4'> 
        <label className='text-black' htmlFor="">Email:
          <input className='w-full block py-4 border-[#D8D8D8] ' type="text" placeholder='Your Email'/>
          </label>   
      </div>

      <div className='w-full border-[#D8D8D8] pt-8 pb-20 border-b py-4'> 
        <label className='text-black' htmlFor="">Review:
          <input className='w-full block py-4 border-[#D8D8D8]' type="text" 
          placeholder='Your Review'/>
          </label>   
      </div>

      <Button className='mt-8 mb-96' text='Submit Review'/>

    </Container>  
    </>
  )
}

export default ProductDetails