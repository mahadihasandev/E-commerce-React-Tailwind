import React from 'react'

const Input = ({text, check, placeholder, type,className}) => {
  return (
    <div className='pt-6'>
        <label className='text-base text-second font-bold font-san leading-6' htmlFor={check}>{text} <br />
     <input id={check} type={type} className={`text-base font-normal py-4 px-2 border-b-2 border-third placeholder:text-sm placeholder:text-first placeholder:font-normal ${className}`} placeholder={placeholder}/> <br />
    </label>
    </div>
  )
}

export default Input