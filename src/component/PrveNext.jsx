import { LuCircleArrowLeft } from "react-icons/lu";

function PrveNext({ className, onClick }) {
  return (
    <div
      className={`${className} absolute top-[36%] left-0 z-20 text-5xl inline-block `}      
      onClick={onClick}>
        <LuCircleArrowLeft />
    </div>
  )
}

export default PrveNext