import { LiHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarNavigationItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

export function NavbarNavigationItem({ children, ...rest }: NavbarNavigationItemProps) {
  return (
    <li
      {...rest}
      className={twMerge(rest.className)}
    >
      {children}
    </li>
  )
}
