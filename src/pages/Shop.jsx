import Container from "../component/Container"
import Flex from "../component/Flex"
import Pagination from "../component/Pagination"
import { GrAppsRounded } from "react-icons/gr";
import { FaListUl } from "react-icons/fa6";
import { useState } from "react";
import MidList from "../component/MidList";
import Catagory from "../component/Catagory";


function Shop() {
const [itemShow,setItemShow]=useState(9)
const [showsubcatagoryone,setShowsubcatagoryone]=useState(false)
const [showsubcatagorytwo,setShowsubcatagorytwo]=useState(false)
const [showsubcatagorythree,setShowsubcatagorythree]=useState(false)

//Catagory expand
  let handleCatagoryone=()=>{
    setShowsubcatagoryone(!showsubcatagoryone)
  }

  let handleCatagorytwo=()=>{
    setShowsubcatagorytwo(!showsubcatagorytwo)
  }

  let handleCatagorythree=()=>{
    setShowsubcatagorythree(!showsubcatagorythree)
  }

  //show menu 
  let handleSelect=(e)=>{
   setItemShow(e.target.value)
    
  }
  return (
  <>
       <section>
        <Container >
          <Flex >

            {/* Shop by Catagory section */}

            <div className="w-3/12 pr-10">
           <MidList className='mt-4 mb-10' text='Shop by Catagory'/>
           <div onClick={handleCatagoryone}>
            <Catagory type='plus' plusicon={showsubcatagoryone} catagoryText='Catagory 1'/>
            </div>
              {showsubcatagoryone&&<div className="bg-lightGray rounded-md px-5">
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
            </div>}
            
           <Catagory catagoryText='Catagory 2'/>
           
           <div onClick={handleCatagorytwo}>
            <Catagory type='plus' plusicon={showsubcatagorytwo} catagoryText='Catagory 1'/>
            </div>
              {showsubcatagorytwo&&<div className="bg-lightGray rounded-md px-5">
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
            </div>}
            
           
           <Catagory catagoryText='Catagory 2'/>

           <div onClick={handleCatagorythree}>
            <Catagory type='plus' plusicon={showsubcatagorythree} catagoryText='Catagory 1'/>
            </div>
              {showsubcatagorythree&&<div className="bg-lightGray rounded-md px-5">
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
              <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
            </div>}
            
           
            </div>


            <div className="w-9/12 ">
                <Flex className="justify-between mt-5 mb-5">
                  <Flex className='gap-x-3'>
                    <GrAppsRounded className=" text-2xl"/>
                    <FaListUl className="text-2xl" />
                  </Flex>
                  <Flex className='gap-x-10'>
                     <Flex className='gap-x-3 items-center'>
                  <h4 className="font-DMs">Short by:</h4>
                  <select className="py-2 px-5 border border-[#F0F0F0]">
                    <option>Feature</option>
                    <option>Populer</option>
                    <option>New</option>
                    <option>A-Z</option>
                  </select>
                  </Flex> 
                   <Flex className='gap-x-3 items-center'>
                  <h4 className="font-DMs">Show:</h4>
                  <select onChange={handleSelect} className="py-2 px-5 border border-[#F0F0F0]">
                    <option>9</option>
                    <option>18</option>
                    <option>24</option>
                    <option>36</option>
                  </select>
                  </Flex> 
                  </Flex>                            
                </Flex>
              <Pagination itemsPerPage={itemShow}/>
            </div>
          </Flex>
        </Container>
       </section>
    </>
  )
}

export default Shop