import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import Flex from './Flex'
import SmallList from './SmallList'

function Catagory({className}) {
  return (
     <Flex className={`${className} justify-between  border-b-2 border-lighterGray pb-5`}>
            <SmallList className='text-base' text='Catagory 1'/><FaCirclePlus className="text-xl"/>
            </Flex>
  )
}

export default Catagory