import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import Flex from './Flex'
import SmallList from './SmallList'

function Catagory({className,catagoryText,type,textClass}) {
  return (
     <Flex className={` justify-between border-b-2 border-lighterGray py-5 ${className}`}>
            <SmallList className={`text-base ${textClass}`} text={catagoryText}/>
            {type=="plus"&&<FaCirclePlus className="text-xl"/>}
            </Flex>
  )
}

export default Catagory