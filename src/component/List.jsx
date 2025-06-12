import React from 'react'

function List({text,className}) {
  return (
    <>
        <li className={`font-DMs w-12 h-5 text-7 font-normal text-lightDark hover:text-deepDark hover:font-bold duration-300 ${className}`}>{text}</li>
    </>
  )
}

export default List