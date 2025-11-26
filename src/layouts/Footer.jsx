import React from 'react'
import MidList from '../component/MidList'
import SmallList from '../component/SmallList'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import logo from '../assets/footerlogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
  <footer className='py-8 sm:py-12 md:py-[55px] bg-lightGray'>
  <Container>
    <Flex className='ml-0 sm:ml-4 md:ml-10 gap-x-4 sm:gap-x-6 md:gap-x-10 flex-wrap md:flex-nowrap'>
        <div className='w-full sm:w-1/2 md:w-[14%] mb-6 sm:mb-8 md:mb-0'>
        <MidList className="text-sm sm:text-base md:text-[16px] pb-3 sm:pb-4 md:pb-[17px]" text="MENU"/>
        <ul className='flex flex-col gap-y-2 sm:gap-y-[6px]'>
          <li><SmallList text="Home"/></li>
          <li><SmallList text="Shop"/></li>
          <li><SmallList text="About"/></li>
          <li><SmallList text="Contact"/></li>
          <li><SmallList text="Journal"/></li>
        </ul>       
        </div>

      <div className='w-full sm:w-1/2 md:w-[14%] mb-6 sm:mb-8 md:mb-0'>
        <MidList className="text-sm sm:text-base md:text-[16px] pb-3 sm:pb-4 md:pb-[17px]" text="SHOP"/>
        <ul className='flex flex-col gap-y-2 sm:gap-y-[6px]'>
          <li><SmallList text="Category 1"/></li>
          <li><SmallList text="Category 2"/></li>
          <li><SmallList text="Category 3"/></li>
          <li><SmallList text="Category 4"/></li>
          <li><SmallList text="Category 5"/></li>
        </ul>
    </div>

    <div className='w-full sm:w-1/2 md:w-[14%] mb-6 sm:mb-8 md:mb-0'>
         <MidList className="text-sm sm:text-base md:text-[16px] pb-3 sm:pb-4 md:pb-[17px]" text="HELP"/>
        <ul className='flex flex-col gap-y-2 sm:gap-y-[6px]'>
          <li><SmallList text="Privacy Policy"/></li>
          <li><SmallList text="Terms & Conditions"/></li>
          <li><SmallList text="Special E-shop"/></li>
          <li><SmallList text="Shipping"/></li>
          <li><SmallList text="Secure Payments"/></li>
        </ul>
    </div>

    <div className='w-full sm:w-1/2 md:w-[29%] mb-6 sm:mb-8 md:mb-0'>
      <div>
      <MidList className="text-sm sm:text-base md:text-[16px]" text="(052) 611-5711"/>
      <MidList className="text-sm sm:text-base md:text-[16px] pb-3 sm:pb-4 md:pb-[17px]" text="company@domain.com"/>
      </div>
      <SmallList className="text-xs sm:text-sm" text="575 Crescent Ave. Quakertown, PA 18951"/>
    </div>
    <div className='w-full sm:w-auto md:w-[29%] md:absolute md:-right-5 md:mt-1 md:mr-[100px] flex justify-center sm:justify-start md:justify-end'>
      <Image className='h-[18px] w-[70px] sm:h-[24px] sm:w-[90px] md:h-[29px] md:w-[122px]' src={logo}/>
    </div>
  </Flex>

      <Flex className="pt-8 sm:pt-12 md:pt-[65px] flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-0">

        <div className='flex gap-x-4 sm:gap-x-6 md:gap-x-[26px] text-lg sm:text-xl md:text-2xl'>
          <FaFacebookF className='cursor-pointer hover:text-blue-600'/>
          <FaLinkedinIn className='cursor-pointer hover:text-blue-700'/>
          <FaInstagram className='cursor-pointer hover:text-pink-600'/>
        </div>
        <div className='text-center sm:text-left md:text-right'>
          <SmallList className='text-xs sm:text-sm md:text-base' text='2020 Orebi Minimal eCommerce Figma Template by Adveits'/>
          
          
        </div>
      </Flex>
    </Container>
    </footer>
  )
}

export default Footer