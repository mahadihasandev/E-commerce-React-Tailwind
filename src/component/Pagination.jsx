import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import axios from 'axios';


function Items({ currentItems }) {

  return (
    <>
      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-[46px] gap-y-6 sm:gap-y-8 justify-center sm:justify-start">
        {currentItems &&
        currentItems.map((item,index) => (
          <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(24%-1.5rem)]">
            <Card id={item.id} nameText={item.title} src={item.thumbnail} priceText={item.price} />
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {

const [allData,setAlldata]=useState([])


  useEffect(()=>{
    async function apiData(){
      let data=await axios.get('https://dummyjson.com/products')
      setAlldata(data.data.products)
    }
    apiData()
  },[])


  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
     <div className='mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
       <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        className='flex gap-x-2 sm:gap-x-3 md:gap-x-5 flex-wrap justify-center'
        pageLinkClassName='p-3 sm:p-4 md:p-5 border border-[#D8D8D8] hover:bg-black hover:text-white text-sm sm:text-base'
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
      <h2 className='text-xs sm:text-sm md:text-base text-center sm:text-right'>{`Products from ${itemOffset+1} to ${endOffset>allData.length?allData.length:endOffset} of ${allData.length}`}</h2>
     </div>
    </>
  );
}

export default Pagination;