

import React from 'react'

interface ButtonsProps{
  children:React.ReactNode;
  className:string;
  onClick?:() => void;
}

const Button = ({children, className, onClick}: ButtonsProps) => {
  return (
    <button onClick={onClick} className={`px-8 py-3 rounded-full text-gray-100 outline-none relative overflow-hidden border border-transparent cursor-pointer ${className}`}>
      {children}
      </button>
  )
}

export default Button