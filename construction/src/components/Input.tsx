interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  name: string
  placeholder?: string
  required?: boolean
  children?: any
}

export default function Input({
  type = "text",
  name,
  placeholder,
  children,
  ...props
}: InputProps) {
  return (
    <div className="flex items-center pr-3 bg-gray-50 rounded-lg focus:bg-transparent focus-within:bg-transparent focus-within:ring-2 focus-within:ring-gray-100">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='w-full h-14 px-4 text-gray-500 text-base rounded-lg bg-gray-50 border-0 placeholder:text-gray-200 focus:ring-0 focus:bg-white'
        {...props}
      />
      {children}
    </div>
  )
}
