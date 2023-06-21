import Image from "next/image";
import Button from "@/components/Button";
import servicesImage from "../assets/services.png";

export default function Services() {
  const ourPoints = {
    "data": {
      "1": {
        number: '01',
        content: 'And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.',
        color: 'bg-cyan-500'
      },
      "2": {
        number: '02',
        content: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
        color: 'bg-orange-500'
      },
      "3": {
        number: '03',
        content: 'Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.',
        color: 'bg-green-500'
      },
    }
  }

  return (
    <>
      <div id="services" className="grid grid-cols-2 gap-2 items-start my-16">
        <div className="flex flex-col gap-5 w-96">
          <p className="mt-4 text-base text-gray-300">
            Lorem ipsum dolor sit amet, bibendum enim, ut congue ipsum. Aenean
            lorem eu vehicula. Fusce mollis in urna ac tristique.
          </p>
          <Button>Contact Us</Button>
        </div>
        <p className="text-gray-500 font-medium text-5xl leading-snug">
          Why Choose us for best construction experience
        </p>
      </div>

      <div className="flex gap-16 items-center justify-between my-10">
        <Image src={servicesImage} alt="Services image" priority className="w-[500px]" />
        <div className="flex flex-col gap-20">
          {Object.values(ourPoints.data).map(({ number, content, color }) => (
            <div key={number} className="relative w-full grid grid-cols-[80px_1fr] gap-4">
              <div className={`relative bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3 w-16 h-16 rounded-tl rounded-tr-3xl rounded-br rounded-bl-3xl ${color}`} />
              <span className="absolute text-6xl font-semibold">
                {number}
              </span>
              <span className="text-gray-300 text-lg">
                {content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}