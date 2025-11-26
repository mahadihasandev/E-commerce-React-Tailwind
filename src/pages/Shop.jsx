/*
  Shop page
  - Left column: filters and category navigation (expandable subcategories).
  - Right column: product list controls (view toggle, sort, show count) and paginated product grid.
  - State:
      * itemShow - number of items per page (controlled by "Show" select).
      * showsubcatagoryX - booleans to toggle each category's sublist.
  - Handlers:
      * handleCatagoryX - toggle corresponding subcategory panel.
      * handleSelect - update items-per-page from select dropdown.
  - Notes:
      * Pagination component receives itemsPerPage prop and handles page state internally.
      * Category items are static UI components (Catagory) — replace with dynamic data when available.
      * Keep accessibility in mind: consider keyboard focus and ARIA attributes for expandable lists.
*/
import Container from "../component/Container"
import Flex from "../component/Flex"
import Pagination from "../component/Pagination"
import { GrAppsRounded } from "react-icons/gr";
import { FaListUl } from "react-icons/fa6";
import { useState } from "react";
import MidList from "../component/MidList";
import Catagory from "../component/Catagory";
import BreadsCrumbs from "../component/BreadsCrumbs";


function Shop() {
  // number of items to display per page (controlled by "Show" select)
  const [itemShow,setItemShow]=useState(9)
  // boolean flags to expand/collapse subcategory lists
  const [showsubcatagoryone,setShowsubcatagoryone]=useState(false)
  const [showsubcatagorytwo,setShowsubcatagorytwo]=useState(false)
  const [showsubcatagorythree,setShowsubcatagorythree]=useState(false)

  // Category expand/collapse handlers - toggle UI state for each category
  let handleCatagoryone=()=>{
    setShowsubcatagoryone(!showsubcatagoryone)
  }

  let handleCatagorytwo=()=>{
    setShowsubcatagorytwo(!showsubcatagorytwo)
  }

  let handleCatagorythree=()=>{
    setShowsubcatagorythree(!showsubcatagorythree)
  }

  // Update items-per-page when user selects a value from the "Show" dropdown
  let handleSelect=(e)=>{
   setItemShow(e.target.value)
    
  }
  return (
  <>
       <section>
        <Container >
          {/* Breadcrumbs page title */}
          <BreadsCrumbs className="my-6 sm:my-8 md:my-10" page='Shop'/>
          <Flex className='flex-col lg:flex-row gap-6 lg:gap-0'>

            {/*  Shop by Category */}
            <div className="w-full lg:w-3/12 lg:pr-6 xl:pr-10">
              <MidList className='mt-2 sm:mt-4 mb-6 sm:mb-8 md:mb-10' text='Shop by Catagory'/>

              {/* Category 1 - clickable header toggles its children */}
              <div onClick={handleCatagoryone}>
                <Catagory type='plus' plusicon={showsubcatagoryone} catagoryText='Catagory 1'/>
              </div>
              {showsubcatagoryone && (
                <div className="bg-lightGray rounded-md px-4 sm:px-5">
                  {/* Subcategory items (static for demo) */}
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
                </div>
              )}
              
              <Catagory catagoryText='Catagory 2'/>

              {/* Category 2 */}
              <div onClick={handleCatagorytwo}>
                <Catagory type='plus' plusicon={showsubcatagorytwo} catagoryText='Catagory 1'/>
              </div>
              {showsubcatagorytwo && (
                <div className="bg-lightGray rounded-md px-4 sm:px-5">
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
                </div>
              )}

              <Catagory catagoryText='Catagory 2'/>

              {/* Category 3 */}
              <div onClick={handleCatagorythree}>
                <Catagory type='plus' plusicon={showsubcatagorythree} catagoryText='Catagory 1'/>
              </div>
              {showsubcatagorythree && (
                <div className="bg-lightGray rounded-md px-4 sm:px-5">
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Laptop'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Headphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Smartphone'/>
                  <Catagory className="border-gray-300" textClass='text-sm' catagoryText='Electronics'/>
                </div>
              )}
            </div>

            {/* Right column product controls paginated listing */}
            <div className="w-full lg:w-9/12">
                <Flex className="flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-3 sm:mt-5 mb-4 sm:mb-5">
                  {/* View toggle (grid / list) purely visual icons */}
                  <Flex className='gap-x-3'>
                    <GrAppsRounded className="text-xl sm:text-2xl cursor-pointer"/>
                    <FaListUl className="text-xl sm:text-2xl cursor-pointer" />
                  </Flex>

                  {/* Sort and show controls */}
                  <Flex className='flex-col sm:flex-row gap-3 sm:gap-x-6 md:gap-x-10 w-full sm:w-auto'>
                     <Flex className='gap-x-2 sm:gap-x-3 items-center'>
                       <h4 className="font-DMs text-sm sm:text-base">Short by:</h4>
                       {/* replace options with real sort keys when data available */}
                       <select className="py-2 px-3 sm:px-5 border border-[#F0F0F0] text-sm sm:text-base w-full sm:w-auto">
                         <option>Feature</option>
                         <option>Populer</option>
                         <option>New</option>
                         <option>A-Z</option>
                       </select>
                     </Flex> 

                     <Flex className='gap-x-2 sm:gap-x-3 items-center'>
                       <h4 className="font-DMs text-sm sm:text-base">Show:</h4>
                       {/* Show select controls items per page passed to Pagination */}
                       <select onChange={handleSelect} className="py-2 px-3 sm:px-5 border border-[#F0F0F0] text-sm sm:text-base w-full sm:w-auto">
                         <option>9</option>
                         <option>18</option>
                         <option>24</option>
                         <option>36</option>
                       </select>
                     </Flex> 
                  </Flex>                            
                </Flex>

                {/* Pagination component - accepts itemsPerPage prop */}
              <Pagination itemsPerPage={itemShow}/>
            </div>
          </Flex>
        </Container>
       </section>
    </>
  )
}

export default Shop