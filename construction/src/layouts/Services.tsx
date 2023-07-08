'use client'

import Image from "next/image";
import { motion } from "framer-motion";

import servicesImage from "@/assets/services.png";
import Button from "@/components/Button";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";


export default function Services() {
  const ourPoints = [
    {
      number: '01',
      content: 'And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.',
      color: 'bg-cyan-500'
    },
    {
      number: '02',
      content: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
      color: 'bg-orange-500'
    },
    {
      number: '03',
      content: 'Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.',
      color: 'bg-green-500'
    }
  ]

  return (
    <motion.section variants={staggerContainer(0.5, 0.3)}>
      <motion.div
        variants={fadeIn('left', 'spring', 1, 0.3)}
        initial="hidden"
        whileInView="show"
        id="services"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-16"
      >
        <div className="flex flex-col items-start gap-5 w-full lg:w-96 order-last md:-order-1">
          <p className="mt-4 text-base text-gray-300 leading-normal">
            Lorem ipsum dolor sit amet, bibendum enim, ut congue ipsum. Aenean lorem eu vehicula. Fusce mollis in urna ac tristique.
          </p>
          <Button>Contact Us</Button>
        </div>
        <p className="text-gray-500 font-medium text-4xl lg:text-5xl leading-snug">
          Why Choose us for best construction experience
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-16 items-center justify-between my-10">
        <motion.div
          variants={zoomIn(0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-3/4 h-full"
        >
          <Image src={servicesImage} alt="Build image" priority className="w-full lg:w-[450px]" />
        </motion.div>
        <div className="flex flex-col gap-10 md:gap-20">
          {ourPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={slideIn('down', 'spring', 1, index * 0.3)}
              initial="hidden"
              whileInView="show"
              className="relative w-5/6 lg:w-full grid grid-cols-1 md:grid-cols-[80px_1fr] gap-12 md:gap-4"
            >
              <div className={`relative bottom-0 left-6 md:left-0 transform -translate-x-1/2 translate-y-1/3 w-16 h-16 rounded-tl rounded-tr-3xl rounded-br rounded-bl-3xl ${point.color}`} />
              <span className="absolute left-4 md:left-0 text-6xl font-semibold">
                {point.number}
              </span>
              <span className="text-gray-300 text-base md:text-lg">
                {point.content}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}