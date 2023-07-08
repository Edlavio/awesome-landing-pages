import { twMerge } from "tailwind-merge"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  name: string
  placeholder?: string
  required?: boolean
  children?: any
}

export default function InputField({
  type = "text",
  name,
  placeholder,
  children,
  ...rest
}: InputFieldProps) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={twMerge('w-full h-14 text-gray-500 text-base bg-transparent focus:bg-transparent focus-within:bg-transparent border-0 placeholder:text-gray-200 focus:ring-0', rest.className)}
      {...rest}
    />
  )
}
