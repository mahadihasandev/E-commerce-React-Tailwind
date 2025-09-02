import { LuCircleArrowRight } from "react-icons/lu";

function NextPrve({ className, onClick }) {
  return (
    <div
      className={`${className} absolute top-[36%] right-2 md:right-7 z-0 md:z-20 text-3xl md:text-5xl inline-block`}    
      onClick={onClick}>
        <LuCircleArrowRight/>
   </div>
  )
}

export default NextPrve