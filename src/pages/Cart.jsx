import React from 'react'
import BreadsCrumbs from '../component/BreadsCrumbs'
import Flex from '../component/Flex'
import Container from '../component/Container'
import { RxCross2 } from 'react-icons/rx'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Image from '../component/Image'
import Button from '../component/Button'

function Cart() {
  return (
    <div>
      <Container className='mb-16'>
      <BreadsCrumbs page='Cart'/>
        <div>
          <Flex className='bg-lightGray w-full px-10 py-[34px] justify-between items-center'>
            <h4 className='font-DMs text-deepDark font-bold 
            text-base'>Product</h4>
            <h4 className='font-DMs text-deepDark font-bold 
            text-base'>Product</h4>
            <h4 className='font-DMs text-deepDark font-bold 
            text-base'>Product</h4>
            <h4 className='font-DMs text-deepDark font-bold 
            text-base pr-[20%]'>Product</h4>
          </Flex>

           <Flex className='justify-center items-center font-DM font-bold border-[0.6px] border-[#ebeaea]'>
          <Flex className='w-3/12 items-center'>
            <div className='pl-5 pr-10 font-bold text-[20px] cursor-pointer'><RxCross2 /></div>
            <div><Image src='' className='w-[100px] h-[100px]' /></div>
            <h2 className='pl-5'>Product name</h2>
          </Flex>
          <div className='w-3/12 font-bold font-DM text-[20px]'>
            <h1>$44.00</h1>
          </div>
          <div className='w-3/12'>
            <div className='px-5 py-1 inline-flex gap-x-6 text-[#767676] items-center'>
              <span className='cursor-pointer'><FaMinus /></span>
              <span className='font-dm text-[20px]'>1</span>
              <span className='cursor-pointer'><FaPlus /></span>
            </div>
          </div>
          <div className='w-3/12 font-bold font-DM text-[20px]'>
            <h1>$44.00</h1>
          </div>
        </Flex>

        <Flex className='justify-between items-center border-b-[0.6px] border-[#ebeaea] p-5 mb-[54px]'>
          <Flex className='gap-x-6 items-center w-3/12 p-2.5 '>
            <select className='p-2.5 rounded pr-30 text-[#767676] border-[0.6px] border-[#ebeaea]'>
              <option name='size' value="">Select Size</option>
              <option name='size' value="">Small</option>
              <option name='size' value="">M</option>
              <option name='size' value="">L</option>
              <option name='size' value="">XL</option>
              <option name='size' value="">XXL</option>
            </select>
            <h4 className='font-DM text-[14px] font-bold'>Apply coupon</h4>
          </Flex>
          <h3 className='font-DM text-[14px] font-bold'>Update cart</h3>
        </Flex>

          <div className="w-full flex justify-end">
          <div className='flex flex-col'>
            <h1 className='font-DM text-[18px] font-bold mb-4'>Cart totals</h1>

            <Flex className='w-[320px] mb-2'>
              <div className='flex font-DM text-[16px] font-bold w-1/2'>
                <h1>Subtotal</h1>
              </div>
              <div className='text-[#767676] font-DM w-1/2'>
                <p>389.99 $</p>
              </div>
            </Flex>

            <Flex className='w-[320px]'>
              <div className='flex font-DM text-[16px] font-bold w-1/2'>
                <h1>Total</h1>
              </div>
              <div className='font-DM w-1/2'>
                <p>389.99 $</p>
              </div>
            </Flex>
          </div>
        </div>
       
       <div className='w-full flex justify-end mt-20'><Button text='Proceed to Checkout'/> </div>
        </div>

        </Container>
    </div>
  )
}

export default Cart