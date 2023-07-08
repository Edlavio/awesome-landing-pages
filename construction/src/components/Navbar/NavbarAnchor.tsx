import { AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  link: string
}

export function NavbarAnchor({ text, link, ...rest }: NavbarAnchorProps) {
  return (
    <a
      {...rest}
      href={link}
      className={twMerge("text-gray-500 text-base", rest.className)}
    >
      {text}
    </a>
  )
}
