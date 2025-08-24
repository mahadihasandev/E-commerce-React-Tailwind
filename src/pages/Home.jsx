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
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import NextPrve from "../component/NextPrve";
import PrveNext from "../component/PrveNext";
import data from "../data";
import { useDispatch } from "react-redux";
import { reduxdataslice } from "../Slices/dataSlice";


function Home() {

  let dispatch=useDispatch()
  dispatch(reduxdataslice(data))

  // Slick slider settings

  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:true,
    nextArrow:<NextPrve/>,
    prevArrow:<PrveNext/>,
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
       
        <Slider {...settingsBanner}>
          <div>
            <Link to="/#">
              <Image className="w-full" src={BannerImg} />
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
       
      {/* Info Section */}
      
      <section className="border-b-[1px] border-[#F0F0F0]">
        <Container>
          <Flex className="py-8 justify-between">
            <Flex className="gap-x-8 items-center">
              <Fa2 className="text-sm" />
              <SmallList text="Two years warranty" className="text-base" />
            </Flex>

            <Flex className="gap-x-8 items-center">
              <FaTruck className="text-base" />
              <SmallList text="Free shipping" className="text-base" />
            </Flex>

            <Flex className="gap-x-8 items-center">
              <GiReturnArrow className="text-base" />
              <SmallList
                text="Return policy in 30 days"
                className="text-base"
              />
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* offer Section */}

      <Container>
        <Flex className="gap-x-10 pt-[140px] pb-[128px]">
          <div className="w-1/2">
            <div className="w-[780px] h-[780px]">
              <Image className="w-full" src={Add1} />
            </div>
          </div>
          <div className="w-1/2">
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

      <section className="pb-20">
        <Container>
          <CommonHeading className="pb-8" text="New Arrival" />
        </Container>

        {/* slack slider */}

        <Container>
        <Slider {...settings}>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg1}
                nameText="Basic Crew Neck Tee"
                colorText="Black"
                priceText="$44.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg2}
                nameText="Smart Watch"
                colorText="Black"
                priceText="$50.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg3}
                nameText="Basket"
                colorText="Multi color"
                priceText="$20.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg4}
                nameText="Doll"
                colorText="Gray"
                priceText="$30.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg1}
                nameText="Basic Crew Neck Tee"
                colorText="Black"
                priceText="$44.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg2}
                nameText="Smart Watch"
                colorText="Black"
                priceText="$50.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg3}
                nameText="Basket"
                colorText="Multi color"
                priceText="$20.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg4}
                nameText="Doll"
                colorText="Gray"
                priceText="$30.00"
              />
            </Link>
          </div>
        </Slider>
        </Container>
        <Container>
          <Flex className="gap-x-10 py-10"></Flex>
        </Container>
      </section>

      {/* Best seller section */}

      <section className="pb-20">
        <Container>
          <CommonHeading className="pb-8" text="Our BestSellers" />
          </Container>
          <Container>

      {/* slack slider2 */}

        <Slider {...settings}>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg1}
                nameText="Basic Crew Neck Tee"
                colorText="Black"
                priceText="$44.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg2}
                nameText="Smart Watch"
                colorText="Black"
                priceText="$50.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg3}
                nameText="Basket"
                colorText="Multi color"
                priceText="$20.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg4}
                nameText="Doll"
                colorText="Gray"
                priceText="$30.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg1}
                nameText="Basic Crew Neck Tee"
                colorText="Black"
                priceText="$44.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg2}
                nameText="Smart Watch"
                colorText="Black"
                priceText="$50.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg3}
                nameText="Basket"
                colorText="Multi color"
                priceText="$20.00"
              />
            </Link>
          </div>
          <div>
            <Link to="">
              <Card
                imgsrc={cardImg4}
                nameText="Doll"
                colorText="Gray"
                priceText="$30.00"
              />
            </Link>
          </div>
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
              imgsrc={cardImg1}
              nameText="Basic Crew Neck Tee"
              colorText="Black"
              priceText="$44.00"
            />

            <Card
              imgsrc={cardImg2}
              nameText="Smart Watch"
              colorText="Black"
              priceText="$50.00"
            />
            <Card
              imgsrc={cardImg3}
              nameText="Basket"
              colorText="Multi color"
              priceText="$20.00"
            />
            <Card
              imgsrc={cardImg4}
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
