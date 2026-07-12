import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Aiman<span className="text-blue-400">.</span>
        </Link>

        <div className="flex gap-5 text-sm text-slate-300">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/skills" className="transition hover:text-white">
            Skills
          </Link>

          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}