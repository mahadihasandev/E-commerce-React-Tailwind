import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import data from '../data';
import axios from 'axios';


function Items({ currentItems }) {

  return (
    <>
      <div className="flex flex-wrap gap-x-[46px]">
        {currentItems &&
        currentItems.map((item,index) => (
          <div key={index}>
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
     <div className='mt-10 mb-10 flex justify-between'>
       <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        className='flex gap-x-5 '
        pageLinkClassName='p-5 border border-[#D8D8D8] hover:bg-black hover:text-white'
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
      <h2>{`Products from ${itemOffset+1} to ${endOffset>allData.length?allData.length:endOffset} of ${allData.length}`}</h2>
     </div>
    </>
  );
}

export default Pagination;