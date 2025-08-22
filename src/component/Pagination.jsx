import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import data from '../data';





function Items({ currentItems }) {


  return (
    <>
      <div className="flex flex-wrap gap-x-[46px]">
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card nameText={item.title} imgsrc={item.image} priceText={item.price} />
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {

const [allData,setAlldata]=useState([])

useEffect(()=>{
  setAlldata(data)
},[])

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        className='flex gap-x-10 pt-10'
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;