export default function TotalNumbers() {
  return (
    <div className="flex gap-10">
      <div className="relative flex flex-col gap-2">
        <div className="relative top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-10 h-10 rounded-full bg-orange-500" />
        <span className="absolute text-4xl font-medium">
          25,356
        </span>
        <span className="text-gray-300 text-xl leading-normal">
          Projects Done
        </span>
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="relative top-0 left-0 transform -translate-x-1/3 -translate-y-1/4 w-10 h-10 rounded-full bg-cyan-500" />
        <span className="absolute text-4xl font-medium">
          15,200
        </span>
        <span className="text-gray-300 text-xl leading-normal">
          Buildings Done
        </span>
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="relative top-0 left-0 transform -translate-x-1/3 -translate-y-1/4 w-10 h-10 rounded-full bg-green-500" />
        <span className="absolute text-4xl font-medium">
          350+
        </span>
        <span className="text-gray-300 text-xl leading-normal">
          Total Employees
        </span>
      </div>
    </div>
  )
}
