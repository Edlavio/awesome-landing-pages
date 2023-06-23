export default function Navbar() {
  return (
    <header className="flex items-start justify-between py-14 px-24 relative">
      <a href="/">
        <h1 className="text-2xl font-semibold text-cyan-500">Construction</h1>
      </a>
      <nav className="pr-8">
        <ul className="flex text-start gap-4 text-lg font-normal text-gray-500">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
