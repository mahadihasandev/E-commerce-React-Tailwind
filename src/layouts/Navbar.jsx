import Container from './../component/Container';
import Flex from '../component/Flex';
import Image from '../component/Image';
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav>
        <Container>
            <Flex>
               <Image src={Logo} className="" alt=""/> 
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar