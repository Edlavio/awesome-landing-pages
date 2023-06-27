import Image from "next/image";
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <section className="flex flex-col py-10">
      <article id="blog" className="flex flex-col gap-6 text-center items-center">
        <h2 className="font-semibold text-gray-500 text-4xl md:text-5xl leading-relaxed">
          Latest Blogs
        </h2>
        <p className="font-medium text-gray-300 text-base md:text-lg w-11/12 md:w-7/12">
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </article>

      <article className="w-11/12 max-h-[375px] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 my-20 mx-auto overflow-y-scroll scroll-auto">
        <BlogCard
          image={blog1}
          title="Unleash Your Creativity"
          description="Nine for Mortal Men, doomed to die, One for"
          link="#"
        />
        <BlogCard
          image={blog2}
          title="Unleash Your Creativity"
          description="Nine for Mortal Men, doomed to die, One for"
          link="#"
        />
        <BlogCard
          image={blog1}
          title="Unleash Your Creativity"
          description="Nine for Mortal Men, doomed to die, One for"
          link="#"
        />
        <BlogCard
          image={blog2}
          title="Unleash Your Creativity"
          description="Nine for Mortal Men, doomed to die, One for"
          link="#"
        />
      </article>
    </section>
  )
}
