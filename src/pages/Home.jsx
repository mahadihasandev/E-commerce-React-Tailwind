import { Link } from "react-router-dom";
import Image from "../component/Image";
import BannerImg from "../assets/BannerImg.jpg";
import Container from "../component/Container";
import Flex from "../component/Flex";
import SmallList from "../component/SmallList";
import { Fa2, FaHeart } from "react-icons/fa6";
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
import { FaSync } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../Slices/AddToCartSlice";
import MidList from "../component/MidList";

/*
  Home page
  - Displays promotional banner carousel, informational badges, featured offer layout and multiple product carousels.
  - Fetches product list from dummyjson (stored in allData) and renders cards inside react-slick sliders.
  - Cart interaction: handleAddToCart dispatches addtocart action with minimal product data (title, price, thumbnail).
  - Notes / design considerations:
    * Sliders use slidesToShow and responsive breakpoints to change visible cards per viewport.
    * Card components should be responsive (use w-full / max-w) so slick can size slides correctly.
    * Each mapped slide uses a unique key (index or id) to avoid React warnings.
    * Consider lazy-loading images for performance and using product id for cart identification in production.
*/

function Home() {

  // local UI state: all fetched products
  const [allData, setAllData] = useState([]);

  // redux dispatch for cart actions
  let dispatch = useDispatch()

  // Fetch product list once on mount
  useEffect(() => {
    async function apiData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    apiData();
  }, []);

  // Add basic product info to cart slice (called from Card / CTA)
  let handleAddToCart = (item) => {
    console.log(item)
    
    dispatch(
      addtocart({
        title: item.title,
        price: item.price,
        image: item.thumbnail,
        quantity: 1,
      })
    );
  };

  // Slick slider settings for product carousels
  // - slidesToShow controls how many cards are visible
  // - responsive breakpoints adjust slidesToShow for smaller screens
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextPrve />,
    prevArrow: <PrveNext />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Banner slider (single-slide autoplay)
  var settingsBanner = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextPrve />,
    prevArrow: <PrveNext />,
  };

  return (
    <div>
      {/* Banner Image carousel (promotional) */}
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

      {/* Info badges (warranty / shipping / returns) */}
      <section className="border-b-[1px] border-[#F0F0F0]">
        <Container>
          <Flex className="py-8 px-2 md:px-0 justify-between">
            <Flex className="gap-x-2 md:gap-x-8 items-center">
              <Fa2 className="text-sm" />
              <SmallList
                text="Two years warranty"
                className="text-[12px] md:text-base"
              />
            </Flex>

            <Flex className="gap-x-2 md:gap-x-8 items-center">
              <FaTruck className="text-base" />
              <SmallList
                text="Free shipping"
                className="text-[12px] md:text-base"
              />
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

      {/* Large offer / promotional layout: left hero image + stacked right images */}
      <Container>
        <Flex className="gap-x-10 md:pt-[140px] pb-4 md:pb-[128px]">
          <div className="w-1/2">
            <div className="w-[400px] h-[400px] md:w-[780px] md:h-[780px]">
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

      {/* New Arrival Section - product carousel */}
      <section className="md:pb-20">
        <Container>
          <CommonHeading className="px-2 md:px-0 md:pb-8" text="New Arrival" />
        </Container>

        <Container>
          <Slider {...settings}>
            {allData.map((item, index) => (
              // each slide centers a Card; Card itself should be responsive (w-full / max-w)
              <div key={index} className="flex items-center justify-center">
                <Link to="">
                  <Card
                   id={item.id}
                    src={item.thumbnail}
                    nameText={item.title}
                    colorText="Black"
                    priceText={item.price}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      {/* Best sellers - reuse same slider settings */}
      <section className="md:pb-20">
        <Container>
          <CommonHeading className="pb-8" text="Our BestSellers" />
        </Container>
        <Container>
          <Slider {...settings}>
            {allData.map((item) => (
              <div>
                <Link to="">
                  <Card
                    id={item.id}
                    src={item.thumbnail}
                    nameText={item.title}
                    colorText="Black"
                    priceText={item.price}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      {/* Promotional image / CTA */}
      <section className="pb-20">
        <Container>
          <Image src={offer} />
        </Container>
      </section>

      {/* Static special offers row (non-carousel) */}
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
