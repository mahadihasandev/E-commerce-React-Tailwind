import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import Card from './Card';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


function NewArrivel() {

const [allData,setAllData]=useState([])

    // Fetch product list once on mount
  useEffect(() => {
    async function apiData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    apiData();
  }, []);


  return (
    <div className='mb-10'>
        <Swiper
        slidesPerView={4}
        autoHeight={true}
        spaceBetween={2}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation, Pagination]}
        className=""
        breakpoints={{
         0: { slidesPerView: 1, spaceBetween: 1 },         
         640: { slidesPerView: 1, spaceBetween: 8 },          
         768: { slidesPerView: 2, spaceBetween: 10 },
          1000: { slidesPerView: 4, spaceBetween: 12 },
       }}
      >

        {
            allData.map((item)=>(
              <>
              <SwiperSlide >
                  <Card
                   id={item.id}
                   className='ml-10'
                   src={item.thumbnail}
                   nameText={item.title}
                   colorText="Black"
                   priceText={item.price}
                   />
        </SwiperSlide>
         
        </>
            ))
        }

      </Swiper>
          
    </div>
  )
}

export default NewArrivel