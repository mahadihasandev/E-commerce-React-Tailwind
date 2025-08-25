import Container from './../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import Logo from '../assets/logo.png';
import List from '../component/List';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { breadCrumb } from '../Slices/BreadCrumbSlice';

function Navbar() {
  let dispatch=useDispatch()

  let handleBreadCrumb=(pagename)=>{
    
    dispatch(breadCrumb(pagename))
  }

  return (
    <nav className='py-8 bg-white'>
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
  )
}

export default Navbar