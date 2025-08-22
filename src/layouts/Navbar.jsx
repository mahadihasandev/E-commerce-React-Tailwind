import Container from './../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import Logo from '../assets/logo.png';
import List from '../component/List';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='py-8 bg-white'>
        <Container>
            <Flex>
              <div className='w-[38%]'><Image src={Logo} className="" alt=""/> </div>
              <div className='w-[40%]'>
              <ul className='flex gap-10'>
                <Link to='/'><List text='Home'/></Link>
                <Link to='/shop'><List text='Shop'/></Link>
                <Link to='/about'><List text='About'/></Link>
                <Link to='/journal'><List text='Journal'/></Link>
                <Link to='/contact'><List text='Contact'/></Link>
              </ul>
              </div>
              <div className='w-[22%]'></div>
               
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar