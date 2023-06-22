import { MoreVertical, Star } from "lucide-react";
import Image from "next/image";

interface CardProps {
  srcImage?: string | any
  alt?: any
  name: string
  city: string
  number: string
  email: string
}

export default function Card({ srcImage, alt = "team-member", name, city, number, email }: CardProps) {
  return (
    <section className="flex flex-col justify-between text-center p-7 w-80 h-[435px] rounded-md shadow-lg shadow-slate-200">
      <article className="flex justify-between w-full">
        <Star color="#f0bb00" size={24} /> <MoreVertical />
      </article>
      <article className="flex flex-col items-center gap-5">
        <Image src={srcImage} width={120} height={120} alt={alt} />
        <div className="flex flex-col gap-2">
          <span className="font-medium text-2xl text-gray-500">{name}</span>
          <span className="font-medium text-xs text-gray-300">{city}</span>
        </div>
      </article>
      <article className="flex flex-col gap-2">
        <span className="text-base text-gray-300">{number}</span>
        <span className="text-lg text-cyan-500">{email}</span>
      </article>
    </section>
  )
}
