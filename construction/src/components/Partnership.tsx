import Image from "next/image";
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'

export default function Partnership() {
  const patnerships = [logo1, logo2, logo3, logo4, logo5]

  return (
    <div className="flex flex-wrap w-full my-16 py-8 px-4 gap-6 md:gap-10 justify-center items-center rounded-full bg-transparent lg:bg-gray-50">
      {patnerships.map((patnership) => (
        <Image
          key={patnership}
          src={patnership}
          alt="patnership"
          className="w-40 h-full"
        />
      ))}
    </div>
  )
}
