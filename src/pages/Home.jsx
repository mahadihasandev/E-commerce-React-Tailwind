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


function Home() {
  var settings = {
    
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <div>
      {/* Banner Image */}

      <Link to="/#">
        <Image className="w-full" src={BannerImg} />
      </Link>

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
          <CommonHeading className="" text="New Arrival" />
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

      <section className="pb-20">
        <Container>
          <CommonHeading className="" text="Our BestSellers" />
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
