import { LuCircleArrowRight } from "react-icons/lu";

function NextPrve({ className, onClick }) {
  return (
    <div
      className={`${className} absolute top-[36%] right-7 z-20 text-5xl inline-block`}    
      onClick={onClick}>
        <LuCircleArrowRight/>
   </div>
  )
}

export default NextPrve