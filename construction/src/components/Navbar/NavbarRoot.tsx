import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarRootProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function NavbarRoot({ children, ...rest }: NavbarRootProps) {
  return (
    <header
      {...rest}
      className={twMerge("flex items-center justify-between py-14 relative", rest.className)}
    >
      {children}
    </header>
  )
}