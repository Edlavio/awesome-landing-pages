"use client"

import { useState } from "react";
import { motion } from 'framer-motion'
import { AlignRightIcon, X } from "lucide-react";

import { Navbar } from ".";
import { navItemVariants, navVariants } from "@/utils/motion";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const menuToggle = () => setIsOpen(!isOpen)

  return (
    <motion.nav className="lg:hidden flex items-start justify-between gap-5" >
      <Navbar.Icon
        icon={isOpen ? X : AlignRightIcon}
        onToggle={menuToggle}
        className="absolute flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 w-10 h-10 right-0 top-14 rounded-full"
      />
      <motion.ul
        variants={navVariants}
        animate={isOpen ? "open" : "closed"}
        className={`absolute ${isOpen ? 'flex' : 'hidden'} flex-col bg-cyan-500 shadow-md rounded-xl w-[320px] h-[400px] right-4 top-28 gap-2 p-4`}
      >
        <motion.li
          variants={navItemVariants}
          animate={isOpen ? "open" : "closed"}
          className="w-full h-full rounded-lg"
        >
          <Navbar.Anchor
            link="#services"
            text="Services"
            className="flex items-center justify-center h-full bg-cyan-500 focus:bg-cyan-600 hover:bg-cyan-600 transition-colors rounded-lg text-white font-medium text-lg"
          />
        </motion.li>
        <motion.li
          variants={navItemVariants}
          animate={isOpen ? "open" : "closed"}
          className="w-full h-full rounded-lg"
        >
          <Navbar.Anchor
            link="#team"
            text="Team"
            className="flex items-center justify-center h-full bg-cyan-500 focus:bg-cyan-600 hover:bg-cyan-600 transition-colors rounded-lg text-white font-medium text-lg"
          />
        </motion.li>
        <motion.li
          variants={navItemVariants}
          animate={isOpen ? "open" : "closed"}
          className="w-full h-full rounded-lg"
        >
          <Navbar.Anchor
            link="#contact"
            text="Contact Us"
            className="flex items-center justify-center h-full bg-cyan-500 focus:bg-cyan-600 hover:bg-cyan-600 transition-colors rounded-lg text-white font-medium text-lg"
          />
        </motion.li>
        <motion.li
          variants={navItemVariants}
          animate={isOpen ? "open" : "closed"}
          className="w-full h-full rounded-lg"
        >
          <Navbar.Anchor
            link="#blog"
            text="Blog"
            className="flex items-center justify-center h-full bg-cyan-500 focus:bg-cyan-600 hover:bg-cyan-600 transition-colors rounded-lg text-white font-medium text-lg"
          />
        </motion.li>
      </motion.ul>
    </motion.nav >
  )
}

