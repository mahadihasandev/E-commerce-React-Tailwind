import React from 'react'

function SmallList({text,className}) {
  return (
    <>
    <div className={`font-DMs font-normal text-[14px] text-faintGray ${className}`}>{text}</div>
    </>
  )
}

export default SmallList