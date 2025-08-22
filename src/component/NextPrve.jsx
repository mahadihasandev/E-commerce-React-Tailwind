import { LuCircleArrowRight } from "react-icons/lu";

function NextPrve({ className, onClick }) {
  return (
    <div
      className={`${className} text-4xl inline-block`}    
      onClick={onClick}>
        <LuCircleArrowRight/>
   </div>
  )
}

export default NextPrve