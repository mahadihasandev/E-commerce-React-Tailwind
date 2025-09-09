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
    <nav className='hidden md:block py-8 bg-white'>
        <Container>
            <Flex>
              <div className='w-[38%]'><Image src={Logo} className="" alt=""/> </div>
              <div className='w-[40%]'>
              <ul className='flex gap-10'>
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

    <nav className='md:hidden bg-white absolute z-20 left-0 right-0'>
        <Container>
            <Flex className='justify-between items-center mx-5 my-4'>
              <div><Image src={Logo} className="" alt=""/> </div>
              <div className='text-xl' onClick={handleHam}><VscThreeBars /></div>
              </Flex>
              {
                ham&&< >
              <div className='w-[90%] pl-12 pb-5'>
              <ul className='flex flex-col gap-10 justify-center items-center'>
                <Link onClick={()=>(handleBreadCrumb('Home'))} to='/'><List text='Home'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Shop'))} to='/shop'><List text='Shop'/></Link>
                <Link onClick={()=>(handleBreadCrumb('About'))} to='/about'><List text='About'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Journal'))} to='/journal'><List text='Journal'/></Link>
                <Link onClick={()=>(handleBreadCrumb('Contact'))} to='/contact'><List text='Contact'/></Link>
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