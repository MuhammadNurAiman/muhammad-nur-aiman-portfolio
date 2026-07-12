import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="flex min-h-[85vh] items-center px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
              Software Engineering Portfolio
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
              Muhammad Nur Aiman
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Junior Software Engineer with experience building responsive web
              applications, dashboard systems and data-driven interfaces using
              Next.js, TypeScript, ASP.NET and MySQL.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
              >
                View Projects
              </Link>

              <a
                href="/resume/Muhammad_Nur_Aiman_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium transition hover:border-slate-400 hover:bg-white/5"
              >
                View Resume
              </a>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium transition hover:border-slate-400 hover:bg-white/5"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="mx-auto">
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl sm:h-80 sm:w-80">
              <Image
                src="/profile/profile.jpeg"
                alt="Muhammad Nur Aiman"
                fill
                priority
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}