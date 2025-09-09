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
  <footer className='py-[55px] bg-lightGray'>
  <Container>
    <Flex className='ml-10 gap-x-10'>
        <div className='w-[14%]'>
        <MidList className="md:text-[16px] pb-[17px]" text="MENU"/>
        <ul className='flex flex-col gap-y-[6px]'>
          <li><SmallList text="Home"/></li>
          <li><SmallList text="Shop"/></li>
          <li><SmallList text="About"/></li>
          <li><SmallList text="Contact"/></li>
          <li><SmallList text="Journal"/></li>
        </ul>       
        </div>

      <div className='w-[14%]'>
        <MidList className="text-[16px] pb-[17px]" text="SHOP"/>
        <ul className='flex flex-col gap-y-[6px]'>
          <li><SmallList text="Category 1"/></li>
          <li><SmallList text="Category 2"/></li>
          <li><SmallList text="Category 3"/></li>
          <li><SmallList text="Category 4"/></li>
          <li><SmallList text="Category 5"/></li>
        </ul>
    </div>

    <div className='w-[14%]'>
         <MidList className="text-[16px] pb-[17px]" text="HELP"/>
        <ul className='flex flex-col gap-y-[6px]'>
          <li><SmallList text="Privacy Policy"/></li>
          <li><SmallList text="Terms & Conditions"/></li>
          <li><SmallList text="Special E-shop"/></li>
          <li><SmallList text="Shipping"/></li>
          <li><SmallList text="Secure Payments"/></li>
        </ul>
    </div>

    <div className='w-[29%]'>
      <div className='hidden md:block'>
      <MidList className="text-[16px]" text="(052) 611-5711"/>
      <MidList className="text-[16px] pb-[17px]" text="company@domain.com"/>
      </div>
      <SmallList className="hidden md:block" text="575 Crescent Ave. Quakertown, PA 18951"/>
    </div>
    <div className='w-[29%] absolute -right-5 mt-1'>
      <Image className='h-[18px] w-[70px] md:h-[29px] md:w-[122px]' src={logo}/>
    </div>
  </Flex>

      <Flex className="pt-[65px] gap-x-[1037px]">

        <div className='flex gap-x-[26px] ml-8 md:ml-5'>
          <FaFacebookF/>
          <FaLinkedinIn/>
          <FaInstagram/>
        </div>
        <div className=''>
          <SmallList text='2020 Orebi Minimal eCommerce Figma Template by Adveits'/>
          
          
        </div>
      </Flex>
    </Container>
    </footer>
  )
}

export default Footer