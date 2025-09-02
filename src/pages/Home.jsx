import { Link } from "react-router-dom";
import Image from "../component/Image";
import BannerImg from "../assets/BannerImg.jpg";
import Container from "../component/Container";
import Flex from "../component/Flex";
import SmallList from "../component/SmallList";
import { Fa2 } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import Add1 from "../assets/Ad_1.jpg";
import Add2 from "../assets/Ad_2.jpg";
import Add3 from "../assets/Ad_3.jpg";
import CommonHeading from "../component/CommonHeading";
import Card from "../component/Card";
import cardImg1 from "../assets/cardImg1.jpg";
import cardImg2 from "../assets/cardImg2.jpg";
import cardImg3 from "../assets/cardImg3.jpg";
import cardImg4 from "../assets/cardImg4.jpg";
import offer from "../assets/offer.png";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import NextPrve from "../component/NextPrve";
import PrveNext from "../component/PrveNext";
import axios from "axios";



function Home() {
const [allData,setAllData]=useState([])

 useEffect(()=>{
    async function apiData(){
      let data=await axios.get('https://dummyjson.com/products')
      setAllData(data.data.products)
    }
    apiData()
  },[])

  // Slick slider settings

  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:true,
    nextArrow:<NextPrve/>,
    prevArrow:<PrveNext/>,
     responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },],
  };

  var settingsBanner = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplaySpeed:3000,
   nextArrow:<NextPrve/>,
    prevArrow:<PrveNext/>,
  };

  return (
    <div>

      {/* Banner Image */}
       <div>
        <Slider {...settingsBanner}>
          <div className="">
            <Link to="/#">
              <Image className=" w-full" src={BannerImg} />
             </Link>
          </div>
          <div>
            <Link to="">
              <Link to="/#">
              <Image className="w-full" src={BannerImg} />
             </Link>
            </Link>
          </div>
          <div>
            <Link to="/#">
              <Image className="w-full" src={BannerImg} />
             </Link>
          </div>
        </Slider>
       </div>
      {/* Info Section */}
      
      <section className="border-b-[1px] border-[#F0F0F0]">
        <Container>
          <Flex className="py-8 px-2 md:px-0 justify-between">
            <Flex className="gap-x-2 md:gap-x-8 items-center">
              <Fa2 className="text-sm" />
              <SmallList text="Two years warranty" className="text-[12px] md:text-base" />
            </Flex>

            <Flex className="gap-x-2 md:gap-x-8 items-center">
              <FaTruck className="text-base" />
              <SmallList text="Free shipping" className="text-[12px] md:text-base" />
            </Flex>

            <Flex className="gap-x-2 md:gap-x-8 items-center">
              <GiReturnArrow className="text-base" />
              <SmallList
                text="Return policy in 30 days"
                className="text-[12px] md:text-base"
              />
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* offer Section */}

      <Container>
        <Flex className="gap-x-10 md:pt-[140px] pb-4 md:pb-[128px]">
          <div className="w-1/2">
            <div className="w-[370px] h-[370px] md:w-[780px] md:h-[780px]">
              <Image className="w-full" src={Add1} />
            </div>
          </div>
          <div className="hidden md:block w-1/2 ">
            <Flex className="flex-col gap-y-10">
              <div className="w-[784px] h-[370px]">
                <Image className="w-full" src={Add2} />
              </div>
              <div className="w-[784px] h-[370px]">
                <Image className="w-full" src={Add3} />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>

      {/* New Arrival Section */}

      <section className="md:pb-20">
        <Container>
          <CommonHeading className="px-2 md:px-0 md:pb-8" text="New Arrival" />
        </Container>

        {/* slack slider */}

        <Container>
        <Slider {...settings}>
        {
          allData.map((item)=>(
               <div>
            <Link to="">
              <Card
              
                src={item.thumbnail}
                nameText={item.title}
                colorText="Black"
                priceText={item.price}
              />
            </Link>
          </div>
          ))
        }
         
        </Slider>
        </Container>
        
      </section>

      {/* Best seller section */}

      <section className="md:pb-20">
        <Container>
          <CommonHeading className="pb-8" text="Our BestSellers" />
          </Container>
          <Container>

      {/* slack slider2 */}

        <Slider {...settings}>

           {
          allData.map((item)=>(
               <div>
            <Link to="">
              <Card
                src={item.thumbnail}
                nameText={item.title}
                colorText="Black" priceText={item.price}
              />
            </Link>
          </div>
          ))
        }
        </Slider>
        </Container>
          
          
        
      </section>

      <section className="pb-20">
        <Container>
          <Image src={offer} />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <CommonHeading className="" text="Special Offers" />
          <Flex className="gap-x-10 py-10">
            <Card
              src={cardImg1}
              nameText="Basic Crew Neck Tee"
              colorText="Black"
              priceText="$44.00"
            />

            <Card
              src={cardImg2}
              nameText="Smart Watch"
              colorText="Black"
              priceText="$50.00"
            />
            <Card
              src={cardImg3}
              nameText="Basket"
              colorText="Multi color"
              priceText="$20.00"
            />
            <Card
              src={cardImg4}
              nameText="Doll"
              colorText="Gray"
              priceText="$30.00"
            />
          </Flex>
        </Container>
      </section>
    </div>
  );
}

export default Home;
