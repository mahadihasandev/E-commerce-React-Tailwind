import React from 'react'
import BreadsCrumbs from '../component/BreadsCrumbs'
import Flex from '../component/Flex'
import Container from '../component/Container'
import { RxCross2 } from 'react-icons/rx'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Image from '../component/Image'
import Button from '../component/Button'
import { useSelector } from 'react-redux'

   

function Cart() {
    let cartItem=useSelector(state=>console.log(state.addToCart))
  return (
    <div>
      <Container className='mb-8 sm:mb-12 md:mb-16'>
      <BreadsCrumbs page='Cart'/>
        <div>
          <Flex className='bg-lightGray w-full px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-[34px] justify-between items-center hidden sm:flex'>
            <h4 className='font-DMs text-deepDark font-bold text-sm sm:text-base flex-1'>Product</h4>
            <h4 className='font-DMs text-deepDark font-bold text-sm sm:text-base flex-1'>Price</h4>
            <h4 className='font-DMs text-deepDark font-bold text-sm sm:text-base flex-1'>Quantity</h4>
            <h4 className='font-DMs text-deepDark font-bold text-sm sm:text-base flex-1 text-right'>Total</h4>
          </Flex>

           <Flex className='flex-col sm:flex-row justify-center items-start sm:items-center font-DM font-bold border-[0.6px] border-[#ebeaea] p-4 sm:p-6 gap-4 sm:gap-0'>
          <Flex className='w-full sm:w-3/12 items-center gap-3 sm:gap-0'>
            <div className='font-bold text-lg sm:text-[20px] cursor-pointer'><RxCross2 /></div>
            <div><Image src='' className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover' /></div>
            <h2 className='text-sm sm:text-base md:text-lg'>Product name</h2>
          </Flex>
          <div className='w-full sm:w-3/12 font-bold font-DM text-base sm:text-[20px] flex sm:block justify-between sm:justify-start'>
            <span className='sm:hidden text-gray-600'>Price:</span>
            <h1>$44.00</h1>
          </div>
          <div className='w-full sm:w-3/12 flex sm:block justify-between sm:justify-start'>
            <span className='sm:hidden text-gray-600 font-normal'>Quantity:</span>
            <div className='px-3 sm:px-5 py-1 inline-flex gap-x-4 sm:gap-x-6 text-[#767676] items-center border sm:border-0'>
              <span className='cursor-pointer'><FaMinus /></span>
              <span className='font-dm text-base sm:text-[20px]'>1</span>
              <span className='cursor-pointer'><FaPlus /></span>
            </div>
          </div>
          <div className='w-full sm:w-3/12 font-bold font-DM text-base sm:text-[20px] flex sm:block justify-between sm:justify-start'>
            <span className='sm:hidden text-gray-600'>Total:</span>
            <h1>$44.00</h1>
          </div>
        </Flex>

        <Flex className='flex-col sm:flex-row justify-between items-stretch sm:items-center border-b-[0.6px] border-[#ebeaea] p-4 sm:p-5 mb-8 sm:mb-12 md:mb-[54px] gap-4 sm:gap-0'>
          <Flex className='flex-col sm:flex-row gap-4 sm:gap-x-6 items-stretch sm:items-center w-full sm:w-auto'>
            <select className='p-2.5 rounded text-[#767676] border-[0.6px] border-[#ebeaea] text-sm sm:text-base w-full sm:w-auto'>
              <option name='size' value="">Select Size</option>
              <option name='size' value="">Small</option>
              <option name='size' value="">M</option>
              <option name='size' value="">L</option>
              <option name='size' value="">XL</option>
              <option name='size' value="">XXL</option>
            </select>
            <h4 className='font-DM text-sm sm:text-[14px] font-bold cursor-pointer'>Apply coupon</h4>
          </Flex>
          <h3 className='font-DM text-sm sm:text-[14px] font-bold cursor-pointer text-center sm:text-left'>Update cart</h3>
        </Flex>

          <div className="w-full flex justify-center sm:justify-end">
          <div className='flex flex-col w-full sm:w-auto'>
            <h1 className='font-DM text-base sm:text-[18px] font-bold mb-4'>Cart totals</h1>

            <Flex className='w-full sm:w-[320px] mb-2'>
              <div className='flex font-DM text-sm sm:text-[16px] font-bold w-1/2'>
                <h1>Subtotal</h1>
              </div>
              <div className='text-[#767676] font-DM w-1/2 text-right'>
                <p>389.99 $</p>
              </div>
            </Flex>

            <Flex className='w-full sm:w-[320px]'>
              <div className='flex font-DM text-sm sm:text-[16px] font-bold w-1/2'>
                <h1>Total</h1>
              </div>
              <div className='font-DM w-1/2 text-right'>
                <p>389.99 $</p>
              </div>
            </Flex>
          </div>
        </div>
       
       <div className='w-full flex justify-center sm:justify-end mt-8 sm:mt-12 md:mt-20'><Button className='w-full sm:w-auto' text='Proceed to Checkout'/> </div>
        </div>

        </Container>
    </div>
  )
}

export default Cart