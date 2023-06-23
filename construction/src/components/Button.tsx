import { w } from 'windstitch';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any
  color?: 'cyan' | 'outline' | 'white'
}

const ButtonW = w.button(
  `
    font-medium 
    text-normal
    rounded-tr 
    rounded-tl-3xl 
    rounded-bl 
    rounded-br-3xl
  `,
  {
    variants: {
      color: {
        cyan: `
        bg-cyan-500 
        hover:bg-cyan-600 
        transition-colors
        text-white 
        shadow-xl
        shadow-cyan-100
        `,
        outline: `
        bg-transparent
        border-2
        transition-colors
        text-cyan-500
        hover:text-cyan-600
        border-cyan-500
        hover:border-cyan-600
        `,
        white: `
        bg-transparent
        border-2
        transition-colors
        text-white
        hover:text-gray-50
        border-white
        hover:border-gray-50
        `
      },
      size: {
        base: 'h-14 px-4 py-1 w-40',
      }
    },
    defaultVariants: {
      size: 'base',
      color: 'cyan'
    }
  },
)

ButtonW.displayName = 'Custom Button'

export default function Button({
  children = "Button",
  color = 'cyan',
  ...props
}: ButtonProps) {
  return (
    <ButtonW color={color} {...props}>
      {children}
    </ButtonW>
  )
}
