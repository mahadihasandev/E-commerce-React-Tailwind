import React from 'react'
import Navbar from '../layouts/Navbar'
import Searchbar from '../layouts/Searchbar'
import Footer from '../layouts/Footer'

function Shop() {
  return (
  <>
       <Navbar/>
      <Searchbar/>
      <div className='text-5xl font-extrabold'>Shop</div>
      <Footer/>
    
    </>
  )
}

export default Shop