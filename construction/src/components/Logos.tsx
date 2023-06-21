import Image from "next/image";
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'

export default function Logos() {
  return (
    <div className="flex flex-wrap w-full my-16 px-10 py-12 gap-8 justify-center items-center rounded-full bg-gray-50">
      <Image src={logo1} alt="Logo 1" />
      <Image src={logo2} alt="Logo 2" />
      <Image src={logo3} alt="Logo 3" />
      <Image src={logo4} alt="Logo 4" />
      <Image src={logo5} alt="Logo 5" />
    </div>
  )
}
