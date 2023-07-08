import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function InputRoot({ children, ...rest }: InputRootProps) {
  return (
    <div className={twMerge("flex items-center px-1 bg-gray-50 rounded-lg focus:bg-transparent focus-within:bg-transparent focus-within:ring-2 focus-within:ring-gray-100", rest.className)}>
      {children}
    </div>
  )
}
