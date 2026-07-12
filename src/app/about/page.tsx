import Navbar from "@/components/Navbar"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h1 className="text-3xl font-bold sm:text-5xl">
              Building practical and user-friendly software
            </h1>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I am a Software Engineering student with hands-on experience
              building responsive web applications, dashboard systems and
              data-driven interfaces.
            </p>

            <p>
              During my internship, I worked with Next.js, TypeScript,
              Tailwind CSS, Leaflet and charting libraries to develop and
              improve modules for a water monitoring portal.
            </p>

            <p>
              I also developed a vehicle booking system using ASP.NET, C# and
              MySQL, covering booking workflows, user roles and approval
              processes.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}