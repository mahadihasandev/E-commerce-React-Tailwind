import React from 'react'
import Navbar from './../layouts/Navbar';
import Searchbar from '../layouts/Searchbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import Image from '../component/Image';
import BannerImg from '../assets/BannerImg.jpg'
import Container from '../component/Container';
import Flex from '../component/Flex';
import SmallList from '../component/SmallList';
import { Fa2 } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

function Home() {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Link to='/#'><Image className='w-full' src={BannerImg}/>
      </Link>
      <Container>
        <Flex className="py-8 justify-between">
             <Flex className='gap-x-8 items-center'>
              <Fa2 className='text-sm'/>
              <SmallList text='Two years warranty' className='text-base'/>
             </Flex>

              <Flex className='gap-x-8 items-center'>
              <FaTruck className='text-base'/>
              <SmallList text='Two years warranty' className='text-base'/>
             </Flex>

             <Flex className='gap-x-8 items-center'>
              <GiReturnArrow className='text-base'/>
              <SmallList text='Two years warranty' className='text-base'/>
             </Flex>
             
        </Flex>
      </Container>
      <Footer/>
    </div>
  )
}

export default Home