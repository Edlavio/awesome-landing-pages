'use client'

import { motion } from 'framer-motion'
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import { fadeIn } from "@/utils/motion";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const posts = [
    {
      image: blog1,
      title: "Unleash Your Creativity",
      description: "Nine for Mortal Men, doomed to die, One for",
      link: "#"
    },
    {
      image: blog2,
      title: "Unleash Your Creativity",
      description: "Nine for Mortal Men, doomed to die, One for",
      link: "#"
    },
    {
      image: blog1,
      title: "Unleash Your Creativity",
      description: "Nine for Mortal Men, doomed to die, One for",
      link: "#"
    },
    {
      image: blog2,
      title: "Unleash Your Creativity",
      description: "Nine for Mortal Men, doomed to die, One for",
      link: "#"
    },
  ]

  return (
    <section className="flex flex-col py-10">
      <motion.article
        variants={fadeIn('up', 'tween', 0.8, 0.5)}
        initial="hidden"
        whileInView="show"
        id="blog"
        className="flex flex-col gap-6 text-center items-center"
      >
        <h2 className="font-semibold text-gray-500 text-4xl md:text-5xl leading-relaxed">
          Latest Blogs
        </h2>
        <p className="font-medium text-gray-300 text-base md:text-lg w-11/12 md:w-7/12">
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </motion.article>

      <article
        className="w-10/12 md:w-3/4 max-h-[350px] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6 my-20 mx-auto overflow-y-scroll scroll-auto"
      >
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            link={post.link}
          />
        ))}
      </article>
    </section>
  )
}
