import { useEffect, useState } from "react"
import BreadsCrumbs from "../component/BreadsCrumbs"
import Container from '../component/Container'
import axios from "axios"
import Card from "../component/Card"

function About() {

  const [apiData,setApiData]=useState([])
  console.log(apiData);
  
useEffect(()=>{

 async function allData(){
  let data=await axios.get('https://dummyjson.com/products')
  setApiData(data.data.product);
 }
 allData()
  
  
},[])
 
  return (
    <div>
      <Container><BreadsCrumbs page='About'/></Container>
      {apiData.map((item)=>(
        
          <Card nameText={item.title} src={item.images}/>
      ))}
   
     
    </div>
  )
}

export default About