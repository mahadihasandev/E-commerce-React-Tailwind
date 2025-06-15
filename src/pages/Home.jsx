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
import Add1 from '../assets/Ad_1.jpg';
import Add2 from '../assets/Ad_2.jpg';
import Add3 from '../assets/Ad_3.jpg';
import CommonHeading from '../component/CommonHeading';
import Card from '../component/Card';
import cardImg1 from '../assets/cardImg1.jpg'
import cardImg2 from '../assets/cardImg2.jpg'
import cardImg3 from '../assets/cardImg3.jpg'
import cardImg4 from '../assets/cardImg4.jpg'

function Home() {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Link to='/#'><Image className='w-full' src={BannerImg}/>
      </Link>
      
      <section className='border-b-[1px] border-[#F0F0F0]'>
        <Container>
        <Flex className="py-8 justify-between">
             <Flex className='gap-x-8 items-center'>
              <Fa2 className='text-sm'/>
              <SmallList text='Two years warranty' className='text-base'/>
             </Flex>

              <Flex className='gap-x-8 items-center'>
              <FaTruck className='text-base'/>
              <SmallList text='Free shipping' className='text-base'/>
             </Flex>

             <Flex className='gap-x-8 items-center'>
              <GiReturnArrow className='text-base'/>
              <SmallList text='Return policy in 30 days' className='text-base'/>
             </Flex>         
        </Flex>
      </Container>
      </section>

      <Container>
        <Flex className='gap-x-10 pt-[140px] pb-[128px]'>
          <div className='w-1/2'>
          <div className='w-[780px] h-[780px]'>
            <Image className='w-full' src={Add1} />
          </div>
          </div>
          <div className='w-1/2'>
          <Flex className='flex-col gap-y-10'>
              <div className='w-[784px] h-[370px]'>
                <Image className='w-full' src={Add2} />
              </div>
              <div className='w-[784px] h-[370px]'>
                <Image className='w-full' src={Add3} />
              </div>
          </Flex>
          </div>
        </Flex>
      </Container>

        <section>
          <Container>
            <CommonHeading className='' text='New Arrival'/>
            <Flex className='gap-x-10 py-10'>
              <Card src={cardImg1}/>
              <Card src={cardImg2}/>
              <Card src={cardImg3}/>
              <Card src={cardImg4}/>
            </Flex>
            
          </Container>
        </section>

      <Footer/>
    </div>
  )
}

export default Home