import { LuCircleArrowLeft } from "react-icons/lu";

function PrveNext({ className, onClick }) {
  return (
    <div
      className={`${className} text-4xl inline-block`}      
      onClick={onClick}>
        <LuCircleArrowLeft />
    </div>
  )
}

export default PrveNext