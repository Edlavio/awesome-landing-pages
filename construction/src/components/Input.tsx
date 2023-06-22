import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  name: string
  placeholder?: string
  required?: boolean
}

export default function Input({
  type = "text",
  name,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      {...rest}
      className='rounded-lg w-full h-14 text-gray-500 text-base bg-gray-50 border-0 placeholder:text-gray-300 focus:ring-2 focus:ring-gray-100 focus:bg-white'
    />
  )
}
