import Navbar from "@/components/Navbar"

const contactItems = [
  {
    label: "Email",
    value: "Muhammad Nur Aiman",
    href: "mailto:muhammadnuraimanmohdfadzi@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Nur Aiman Mohd Fadzi",
    href: "https://www.linkedin.com/in/muhammadnur-aiman/",
  },
  {
    label: "GitHub",
    value: "MuhammadNurAiman",
    href: "https://github.com/MuhammadNurAiman",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h1 className="text-4xl font-bold sm:text-6xl">
              Let&apos;s connect
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am open to junior software engineering, web development and
              AI-related opportunities. Feel free to contact me through email,
              LinkedIn or GitHub.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  {item.label}
                </p>

                <p className="mt-4 break-words text-slate-300">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
              Send me an email and I will get back to you as soon as possible.
            </p>

            <a
              href="mailto:muhammadnuraimanmohdfadzi@gmail.com"
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}