import React from 'react'

function CommonHeading({text,className}) {
  return (
    <>
    <h2 className={`text-deepDark font-DMs text-[39px] font-bold ${className}`}>{text}</h2>
    </>
  )
}

export default CommonHeading