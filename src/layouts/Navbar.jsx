import Container from './../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import Logo from '../assets/logo.png';
import List from '../component/List';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { breadCrumb } from '../Slices/BreadCrumbSlice';
import { VscThreeBars } from "react-icons/vsc";
import { useState } from 'react';

function Navbar() {
  let dispatch=useDispatch()

  const[ham,setHam]=useState(false)

  let handleBreadCrumb=(pagename)=>{
    
    dispatch(breadCrumb(pagename))
  }

  let handleHam=()=>{
    setHam(!ham)
  }

  return (
    <>
    <nav className='hidden md:block py-4 sm:py-6 md:py-8 bg-white'>
        <Container>
            <Flex className='items-center'>
              <div className='w-[30%]'><Image src={Logo} className="w-24 sm:w-32 md:w-auto h-auto" alt=""/> </div>
              <div className='w-[40%]'>
              <ul className='flex gap-6 lg:gap-10 justify-center'>
                <Link onClick={()=>(handleBreadCrumb('Home'))} to='/'><List text='Home'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Shop'))} to='/shop'><List text='Shop'/></Link>
                <Link onClick={()=>(handleBreadCrumb('About'))} to='/about'><List text='About'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Journal'))} to='/journal'><List text='Journal'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Contact'))} to='/contact'><List text='Contact'/></Link>
              </ul>
              </div>
              <div className='w-[22%]'></div>
               
            </Flex>
        </Container>
    </nav>

    <nav className='md:hidden bg-white sticky top-0 z-20 left-0 right-0 shadow-sm'>
        <Container>
            <Flex className='justify-between items-center py-3 sm:py-4'>
              <div className='w-24 sm:w-32'><Image src={Logo} className="w-full h-auto" alt=""/> </div>
              <div className='text-2xl sm:text-3xl cursor-pointer' onClick={handleHam}><VscThreeBars /></div>
              </Flex>
              {
                ham&&< >
              <div className='w-full px-4 sm:px-6 pb-5 bg-white border-t'>
              <ul className='flex flex-col items-center gap-4 sm:gap-6 md:gap-10 py-4'>
                <Link onClick={()=>{handleBreadCrumb('Home'); setHam(false)}} to='/'><List text='Home'/></Link>
                <Link onClick={()=>{handleBreadCrumb('Shop'); setHam(false)}} to='/shop'><List text='Shop'/></Link>
                <Link onClick={()=>{handleBreadCrumb('About'); setHam(false)}} to='/about'><List text='About'/></Link>
                <Link onClick={()=>{handleBreadCrumb('Journal'); setHam(false)}} to='/journal'><List text='Journal'/></Link>
                <Link onClick={()=>{handleBreadCrumb('Contact'); setHam(false)}} to='/contact'><List text='Contact'/></Link>
              </ul>
              </div>
              
               </>
              }
            
        </Container>
    </nav>
    </>
  )
}

export default Navbar