import Image from "next/image"
import Button from "./Button"

interface BlogCardProps {
  title: string
  description: string
  image: any
  link: string
}
export default function BlogCard({title, description, image, link}: BlogCardProps) {
  return (
    <div className="relative flex min-w-1/2 max-w-2/3 md:w-9/12 items-end justify-center text-center">
      <Image src={image} alt="" className="relative w-full object-contain" />
      <div className="absolute flex flex-col items-center gap-2 pb-8 px-4">
        <h2 className="font-bold text-xl text-white">
          {title}
        </h2>
        <span className="text-white text-base mb-4">
          {description}
        </span>
        <Button color="white">
          <a href={link} target="_blank" className="w-full h-full">
            Read More
          </a>
        </Button>
      </div>
    </div>
  )
}
