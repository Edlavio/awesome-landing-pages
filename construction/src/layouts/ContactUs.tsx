'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import globalMap from '@/assets/global.png'
import Form from '@/components/Form'
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion'

export default function ContactUs() {
  return (
    <motion.section
      variants={staggerContainer(0.5, 0.3)}
      initial="hidden"
      whileInView="show"
      id="contact"
      className="flex flex-col py-10"
    >
      <motion.article
        id="team"
        variants={fadeIn('up', 'tween', 0.8, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col gap-6 text-center items-center"
      >
        <h2 className="font-semibold text-gray-500 text-4xl md:text-5xl leading-relaxed">
          Contact Us
        </h2>
        <p className="font-medium text-gray-300 text-base md:text-lg w-11/12 md:w-7/12">
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </motion.article>
      <article className='grid grid-cols-1 lg:grid-cols-[380px_auto] place-items-center py-16'>
        <motion.div variants={slideIn('left', 'tween', 0.5, 0.5)} initial="hidden" whileInView="show">
          <Form />
        </motion.div>
        <Image src={globalMap} alt='Global map' className='hidden lg:block min-w-5/6' />
      </article>
    </motion.section>
  )
}
