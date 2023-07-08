import { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from "tailwind-merge"

interface InputIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  size?: string
}

export default function InputIcon({ icon: Icon, size, ...rest }: InputIconProps) {
  return (
    <button className={twMerge("flex items-center justify-center bg-transparent focus:bg-transparent focus-within:bg-transparent", rest.className)} {...rest}>
      <Icon size={size} className="text-2xl" />
    </button>
  )
}
