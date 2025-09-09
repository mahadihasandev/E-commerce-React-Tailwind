import { LuCircleArrowLeft } from "react-icons/lu";

function PrveNext({ className, onClick }) {
  return (
    <div
      className={`${className} absolute top-[36%] left-2 md:left-5 z-10 md:z-20 text-3xl md:text-5xl inline-block `}      
      onClick={onClick}>
        <LuCircleArrowLeft />
    </div>
  )
}

export default PrveNext