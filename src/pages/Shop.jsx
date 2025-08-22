import Container from "../component/Container"
import Flex from "../component/Flex"
import Pagination from "../component/Pagination"
import { GrAppsRounded } from "react-icons/gr";
import { FaListUl } from "react-icons/fa6";
import { useState } from "react";

function Shop() {
const [itemShow,setItemShow]=useState(9)


  let handleSelect=(e)=>{
   setItemShow(e.target.value)
    
  }
  return (
  <>
       <section>
        <Container >
          <Flex >
            <div className="w-3/12">
           
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