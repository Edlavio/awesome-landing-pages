import { Navbar } from "@/components/Navbar";

export default function Header() {
  return (
      <Navbar.Root>
        <a href="/">
          <h1 className="text-2xl font-semibold text-cyan-500">Construction</h1>
        </a>

        {/* Desktop Navbar */}
        <Navbar.Navigation className="hidden lg:flex items-start justify-between gap-5">
          <Navbar.Item>
            <Navbar.Anchor link="#services" text="Services" />
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Anchor link="#team" text="Team" />
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Anchor link="#contact" text="Contact Us" />
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Anchor link="#blog" text="Blog" />
          </Navbar.Item>
        </Navbar.Navigation>

        {/* Mobile Navbar */}
        <Navbar.Mobile />
      </Navbar.Root>
  )
}