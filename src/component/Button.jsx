function Button({text,className}) {
  return (
    <>
    <button className={`bg-black text-white px-4 py-16 ${className}`}>
        {text}
    </button>
    </>
  )
}

export default Button