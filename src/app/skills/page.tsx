import Navbar from "@/components/Navbar"

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Skills
            </p>

            <h1 className="text-3xl font-bold sm:text-5xl">
              Technologies I work with
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Tools and technologies I have used in academic, internship and
              personal projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Frontend",
                skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "Backend",
                skills: ["ASP.NET", "C#", "Node.js", "REST API"],
              },
              {
                title: "Database",
                skills: ["MySQL", "Database Design", "SQL"],
              },
              {
                title: "Tools",
                skills: ["Git", "GitHub", "VS Code", "Leaflet", "Recharts"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-white/10 bg-slate-900/60 p-6"
              >
                <h2 className="mb-4 text-lg font-semibold text-blue-400">
                  {group.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}