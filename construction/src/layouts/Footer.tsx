import Input from "@/components/Input";
import { ArrowRightCircle, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 w-full pt-10 mt-20">
      <div className="grid grid-cols-4 justify-items-center">
        <section className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold text-cyan-500">
            Construction
          </h1>
          <article className="flex flex-col items-start gap-8">
            <p className="font-base text-gray-300 w-60">
              You’ll find your next Home loan valu you prefer.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </article>
        </section>
        <section className="flex flex-col gap-8">
          <h3 className="font-semibold text-gray-500 text-lg">
            Resources
          </h3>
          <article className="flex flex-col gap-4 text-base text-gray-300">
            <a href="#" className="hover:text-gray-500 transition-colors">
              Our Agents
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Member Stories
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Video
            </a>
          </article>
        </section>
        <section className="flex flex-col gap-8">
          <h3 className="font-semibold text-gray-500 text-lg">
            Company
          </h3>
          <article className="flex flex-col gap-4 text-base text-gray-300">
            <a href="#" className="hover:text-gray-500 transition-colors">
              Patnerships
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Terms of use
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Privacy
            </a>
          </article>
        </section>
        <section className="flex flex-col gap-8">
          <h3 className="font-semibold text-gray-500 text-lg">
            Get in touch
          </h3>
          <article className="flex flex-col gap-4 text-base text-gray-300">
            <Input
              name="getintouch"
              placeholder="Enter your email"
              className="rounded w-44 h-10 text-xs text-gray-500 bg-gray-50 placeholder:text-gray-200 border-0 focus:ring-0 focus-within:bg-transparent"
            >
              <button>
                <ArrowRightCircle size={18} className="text-cyan-500" />
              </button>
            </Input>
          </article>
        </section>
      </div>
      <section className="flex text-center justify-center py-6 border-t-2 border-gray-100 w-full">
        <span className="text-gray-100 text-sm font-medium">Construction All rights reserved.</span>
      </section>
    </footer>
  )
}
