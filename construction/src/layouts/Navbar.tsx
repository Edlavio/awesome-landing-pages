export default function Navbar() {
  return (
    <header className="flex items-start justify-between py-14 px-24 relative">
      <h1 className="text-2xl font-semibold text-cyan-500">Construction</h1>
      <nav className="pr-8">
        <ul className="flex text-start gap-4 text-lg font-normal text-gray-500">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
