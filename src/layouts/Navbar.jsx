import Container from './../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import Logo from '../assets/logo.png';
import List from '../component/List';

function Navbar() {
  return (
    <nav className='py-8 bg-white'>
        <Container>
            <Flex>
              <div className='w-[38%]'><Image src={Logo} className="" alt=""/> </div>
              <div className='w-[40%]'>
              <ul className='flex gap-10'>
                <List text='Home'/>
                <List text='Shop'/>
                <List text='About'/>
                <List text='Journal'/>
                <List text='Contact'/>
              </ul>
              </div>
              <div className='w-[22%]'></div>
               
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar