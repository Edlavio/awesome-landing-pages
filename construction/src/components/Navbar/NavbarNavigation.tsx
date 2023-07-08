import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface NavbarNavigationProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export function NavbarNavigation({ children, ...rest }: NavbarNavigationProps) {
  return (
    <ul {...rest} className={twMerge(rest.className)}>
      {children}
    </ul>
  )
}
