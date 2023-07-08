'use client'

import { MoveRight } from "lucide-react";
import { motion } from 'framer-motion'
import Button from "@/components/Button";
import { fadeIn } from "@/utils/motion";

export default function Newsletter() {
  return (
    <motion.article
      variants={fadeIn('up', 'tween', 0.8, 0.5)}
      initial="hidden"
      whileInView="show"
      className="w-full flex flex-col gap-6 text-center items-center"
    >
      <h2 className="w-9/12 md:w-7/12 font-semibold text-gray-500 text-4xl md:text-5xl leading-tight capitalize">
        Subscribe to our Newsletter
      </h2>
      <p className="font-medium text-gray-300 text-base md:text-lg w-9/12 md:w-7/12">
        Age sold some full like rich new. Amounted repeated as believed in confined juvenile.
      </p>
      <Button>
        <a href="#" className="flex gap-3 justify-center items-center">
          SUBSCRIBE
          <MoveRight size={18} />
        </a>
      </Button>
    </motion.article>
  )
}
