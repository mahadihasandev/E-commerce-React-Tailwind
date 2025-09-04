import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

/*
  ProductDetails page
  - Fetches product list from dummyjson and finds the product that matches the URL param (params.title).
  - Renders product media, rating UI, price, options (color/size/qty), status, CTA buttons, features, description and reviews.
  - Notes:
    * The component currently fetches entire product list and filters by title. Consider fetching a single product by id for production.
    * UI sections are annotated below to reflect the design structure.
*/

function ProductDetails() {

let params =useParams()
console.log(params);

const [star1,setStar1]=useState(false);
const [star2,setStar2]=useState(false);
const [star3,setStar3]=useState(false);
const [star4,setStar4]=useState(false);
const [star5,setStar5]=useState(false);
const [data2,setData2]=useState([]);

// Data fetch:
// - Loads products from dummyjson.
// - Note: dependency currently set to data2 which will retrigger the fetch; for one-time load use [].
useEffect(()=>{
  async function apiData() {
    let data=await axios.get("https://dummyjson.com/products")
   setData2(data.data.products)
    
  }
  apiData()
},[data2])

// Rating toggles (simple client-side star toggles matching design)
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
      {/* Breadcrumbs / Page title */}
      <BreadsCrumbs className='my-10' page='ProductDetails'/>
     <div>
        {
          /* Product block:
             - iterates all products and matches by title param (params.title)
             - Consider rendering a single product object and adding `key` when mapping lists
          */
          data2.map((item)=>( 
            item.id==params.id && <>
            {/* Top product image (media) */}
              <div className='h-[370px] w-[370px] ml-24'> <Image src={item.thumbnail}/></div>

              {/* Product title */}
                <CommonHeading className='pt-16 pb-4' text={item.title}/>

              {/* Rating row (stars + review count) */}
      <Flex className='gap-x-6 items-center'>
        <Flex className='gap-x-2'>
          
        <FaStar onClick={handleStar1} className={star1?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar2} className={star2?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar3} className={star3?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar4} className={star4?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar onClick={handleStar5} className={star5?'text-[#FFD700]':'text-[#B6B6B6]'}/>
      </Flex>
      <p className='text-lightDark text-sm font-DMs font-normal'>{`${item.reviews.length} Reviews`}</p>
      </Flex>

      {/* Price block (regular + sale) */}
      <div className='w-1/2 border-[#D8D8D8] border-b py-6'>
        <Flex className='text-center gap-[22px]'>
        <SmallList text={`Discount: ${item.discountPercentage}%`} />
        <SmallList className='!font-extrabold' text={item.price}/>
        
      </Flex>
      </div>

      {/* Color selector (visual swatches) */}
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

      {/* Size selector */}
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

      {/* Quantity control - placeholder UI */}
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

      {/* Status / stock */}
      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='gap-x-14 items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='STATUS'/>
       <SmallList text={item.stock}/>
      </Flex>
      </div>

      {/* CTA buttons: wishlist and add to cart */}
      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='gap-x-5 items-center py-7'>
        <Button text='Add to Wish List'/>
       <Button text='Add To Cart'/>
      </Flex>
      </div>

      {/* Features & Shipping accordions (design placeholders with icon) */}
      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='justify-between items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='FEATURES & DETAILS'/>
        <FaPlus />

      </Flex>
      {/* Short description */}
      
      </div>
            <div className='w-[50%] pb-4 border-b py-4'> 
          <SmallList text={item.description}/>   
      </div>
      <div className='w-1/2 border-[#D8D8D8] border-b py-4'>
      <Flex className='justify-between items-center py-7'>
        <SmallList className='!font-extrabold !text-black' text='SHIPPING & RETURNS'/>
        <FaPlus />
      </Flex>
      </div>

       {/* Product long description */}
       <div className='w-1/2 border-[#D8D8D8] pb-[123px] py-4'>    
        <SmallList text={item.shippingInformation}/>  
      </div>

      {/* Description / Reviews tabs header */}
    <div className='w-full border-[#D8D8D8]  border-b py-4'> 
        <Flex className='gap-x-10'>

          <SmallList className='!font-extrabold !text-black text-base' text={` Reviews(${item.reviews.length})`}/>
        </Flex>    
      </div>

      

      {/* Single review block (design example) */}

       {
              item.reviews.map((item)=>(
                    <>
              <div className='w-full border-[#D8D8D8] pb-4 border-b py-4'> 
        <Flex className='gap-x-10 items-center justify-between'>
          <div className='flex items-center gap-x-10'>
           
          <SmallList className='text-black' text={item.reviewerName}/>
          <Flex className='gap-x-2'>
        <FaStar className={item.rating>=1?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar className={item.rating>=2?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar className={item.rating>=3?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar className={item.rating>=4?'text-[#FFD700]':'text-[#B6B6B6]'}/>
        <FaStar className={item.rating>=5?'text-[#FFD700]':'text-[#B6B6B6]'}/>
      </Flex>
      </div>
      <SmallList text="6 month ago"/>       
        </Flex> 
        <SmallList className='pt-4' text={item.comment}/>
      </div>
                    </>
              ))
            }
      
      
        {/* Add a Review heading */}
        <div className='w-full border-[#D8D8D8] pt-8 pb-4 py-12'> 
          <MidList text='Add a Review'/>   
      </div>

       {/* Review form fields (name/email/review) */}
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


            </>
            
            
          ))
        }
        
   </div>
        
      
      
    </Container>  
    </>
  )
}

export default ProductDetails