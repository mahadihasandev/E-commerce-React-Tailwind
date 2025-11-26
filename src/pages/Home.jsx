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
import NewArrivel from "../component/NewArrivel";

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


  // Banner slider (single-slide autoplay)
  var settingsBanner = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
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
              <Image className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover w-full" src={BannerImg} />
            </Link>
          </div>
          <div className="">
            <Link to="/#">
              <Image className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover w-full" src={BannerImg} />
            </Link>
          </div>
          <div className="">
            <Link to="/#">
              <Image className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover w-full" src={BannerImg} />
            </Link>
          </div>
        
        </Slider>
      </div>

      {/* Info badges (warranty / shipping / returns) */}
      <section className="border-b-[1px] border-[#F0F0F0]">
        <Container>
          <Flex className="py-4 sm:py-6 md:py-8 px-5 md:px-0 flex-col sm:flex-row justify-between gap-4 sm:gap-0">
            <Flex className="gap-x-2 sm:gap-x-4 md:gap-x-8 items-center justify-center sm:justify-start">
              <Fa2 className="text-sm md:text-base" />
              <SmallList
                text="Two years warranty"
                className="text-[12px] sm:text-sm md:text-base"
              />
            </Flex>

            <Flex className="gap-x-2 sm:gap-x-4 md:gap-x-8 items-center justify-center sm:justify-start">
              <FaTruck className="text-sm md:text-base" />
              <SmallList
                text="Free shipping"
                className="text-[12px] sm:text-sm md:text-base"
              />
            </Flex>

            <Flex className="gap-x-2 sm:gap-x-4 md:gap-x-8 items-center justify-center sm:justify-start">
              <GiReturnArrow className="text-sm md:text-base" />
              <SmallList
                text="Return: 30 days"
                className="text-[12px] sm:text-sm md:text-base"
              />
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* Large offer / promotional layout: left hero image + stacked right images */}
      <Container>
        <Flex className="gap-x-4 sm:gap-x-6 md:gap-x-10 pt-8 sm:pt-12 md:pt-[140px] pb-4 sm:pb-8 md:pb-[128px] flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto">
              <Image className="w-full h-auto object-cover" src={Add1} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Flex className="flex-col gap-y-4 sm:gap-y-6 md:gap-y-10">
              <div className="w-full h-auto">
                <Image className="w-full h-auto object-cover" src={Add2} />
              </div>
              <div className="w-full h-auto">
                <Image className="w-full h-auto object-cover" src={Add3} />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>

      {/* New Arrival Section - product carousel */}
      <section className="pb-8 sm:pb-12 md:pb-20">
        <Container>
          <CommonHeading className="px-4 sm:px-6 md:px-0 py-3 sm:py-4 md:py-0 md:pb-8" text="New Arrival" />
        </Container>

        <Container>
          <NewArrivel/>
        </Container>
      </section>

      {/* Best sellers - reuse same slider settings */}
      <section className="pb-8 sm:pb-12 md:pb-20">
        <Container>
          <CommonHeading className="pb-6 sm:pb-8 px-4 sm:px-6 md:px-0 md:ml-0" text="Our BestSellers" />
        </Container>
        <Container>
          <NewArrivel/>
        </Container>
      </section>

      {/* Promotional image / CTA */}
      <section className="pb-8 sm:pb-12 md:pb-16">
        <Container>
          <Image className='w-full h-auto object-cover' src={offer} />
        </Container>
      </section>

      {/* Static special offers row (non-carousel) */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <Container>
          <CommonHeading className="px-4 sm:px-6 md:px-0 mb-6 sm:mb-8 md:ml-0" text="Special Offers" />
          <NewArrivel/>
        </Container>
      </section>
    </div>
  );
}

export default Home;
