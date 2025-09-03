import { useEffect, useRef, useState } from "react"
import BreadsCrumbs from "../component/BreadsCrumbs"
import Container from '../component/Container'
import axios from "axios"
import Card from "../component/Card"

function About() {

 let refa=useRef()
  
let handleClick=()=>{
  console.log(refa.current);
  
}
 
  return (
    <div>
     <h1 ref={refa}>ok ok</h1>
    <button  onClick={handleClick}>Click</button>
     
    </div>
  )
}

export default About