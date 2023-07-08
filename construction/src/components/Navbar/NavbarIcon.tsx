import { ButtonHTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  onToggle?: () => void
}

export function NavbarIcon({ icon: Icon, onToggle, ...rest }: NavbarIconProps ) {
  return (
    <button
      {...rest}
      onClick={onToggle}
      className={twMerge('flex items-center justify-center bg-cyan-500 w-10 h-10 rounded-full -mt-2', rest.className)}
    >
      <Icon className="w-5 h-5 text-white" />
    </button>
  )
}
