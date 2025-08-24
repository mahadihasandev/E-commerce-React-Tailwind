import React from 'react'
import { useSelector } from 'react-redux';
import MidList from '../component/MidList';
import Flex from '../component/Flex';
import Image from '../component/Image';

function About() {
  const reduxData=useSelector(state=>state.sitedata.value)
  console.log(reduxData);
  
  return (
    <div>
      {
        reduxData.map((item=>(
          <>
          <Flex>
        <MidList text={item.id}/>
        <MidList text={item.title}/>
        <Image src={item.image}/>
        </Flex>
         </>
      )))
      }
     
    </div>
  )
}

export default About