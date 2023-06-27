'use client'

import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openMenu = () => setIsNavOpen(true)
  const closeMenu = () => setIsNavOpen(false)

  const mobile = '-ml-56 absolute w-52 flex flex-col justify-between gap-8 text-white text-center p-4 bg-cyan-500 rounded-md'
  const desktop = 'flex text-start gap-4 text-lg font-normal text-gray-500'

  return (
    <header className="flex items-start justify-between py-14 px-4 lg:px-24 relative">
      <a href="/">
        <h1 className="text-2xl font-semibold text-cyan-500">Construction</h1>
      </a>
      <div className="relative flex flex-col items-end gap-4">
        {/* Open Menu button */}
        <button
          onClick={openMenu}
          className={`${isNavOpen ? 'hidden' : 'flex'} lg:hidden flex items-center justify-center bg-cyan-500 w-10 h-10 rounded-full -mt-2`}
        >
          <Menu size={24} className="text-white" />
        </button>
        {/* Close Menu button */}
        <button
          onClick={closeMenu}
          className={`${isNavOpen ? 'flex' : 'hidden'} lg:hidden flex items-center justify-center bg-cyan-500 w-10 h-10 rounded-full -mt-2`}
        >
          <X size={24} className="text-white" />
        </button>
        {/* Navbar */}
        <nav className={`lg:pr-8 lg:block ${isNavOpen ? "block" : "hidden"}`}>
          <ul className={`${isNavOpen ? mobile : desktop}`}>
            <li>
              <a href="#services" className="w-full rounded px-14 py-2 lg:px-0 lg:py-0 bg-cyan-500 focus:bg-cyan-700 lg:focus:bg-transparent lg:bg-transparent">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="w-full rounded px-12 py-2 lg:px-0 lg:py-0 bg-cyan-500 focus:bg-cyan-700 lg:focus:bg-transparent lg:bg-transparent">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="w-full rounded px-12 py-2 lg:px-0 lg:py-0 bg-cyan-500 focus:bg-cyan-700 lg:focus:bg-transparent lg:bg-transparent">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="w-full rounded px-12 py-2 lg:px-0 lg:py-0 bg-cyan-500 focus:bg-cyan-700 lg:focus:bg-transparent lg:bg-transparent">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
