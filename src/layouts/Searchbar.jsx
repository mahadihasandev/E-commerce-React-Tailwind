import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import SeIcon from '../assets/seIcon.png'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";

function Searchbar() {
  return (
    <>
    <section className='bg-lightGray py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12'>
                <Flex className="items-center gap-2"><Image className="h-[10px] w-[19px]" src={SeIcon}/>
                <p className='font-DMs text-lg font-normal'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-4/12 relative ml-5'>
                <input className='w-full border-none bg-white py-4 px-7 rounded-lg 
                placeholder:font-DMs placeholder:text-[14px] 
                placeholder:font-normal' type="text" placeholder='Search Product'/>
                <FaSearch onClick={()=>{window.open("https://www.google.com","_blank")}} className='absolute top-1/2 right-[17px] -translate-y-1/2' />
                </div>

                <div className='w-4/12'>
                <Flex className="items-center justify-end gap-x-10">
                      <div className='flex gap-x-2.5'>
                        <FaUser className='text-2xl'/>
                      <TiArrowSortedDown className='text-2xl'/>
                      </div>
                        <FaShoppingCart className='text-2xl'/>
                </Flex>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Searchbar