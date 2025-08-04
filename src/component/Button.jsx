function Button({text,className}) {
  return (
    <>
    <button className={`bg-black text-white py-4 px-16 text-base font-DMs font-bold hover:bg-transparent 
        border border-transparent hover:border-black hover:text-black duration-300 ${className}`}>
        {text}
    </button>
    </>
  )
}

export default Button