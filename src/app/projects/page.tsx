import Link from "next/link"
import Image from "next/image"
const projects = [
    {
        category: "Internship Project",
        title: "NAWABS Water Monitoring Portal",
        slug: "nawabs",
        description:
            "Developed and improved interactive modules for a water monitoring portal, including GIS maps, timeseries charts, station panels and API-driven data visualisation.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Leaflet",
            "Recharts",
            "REST API",
        ],
        images: [
            "/projects/nawabs/map.png",
            "/projects/nawabs/layout.png",
            "/projects/nawabs/polygon.png",
            "/projects/nawabs/discharge.png",
        ],
    },
    {
        category: "Academic Project",
        title: "myBDB Book Vehicle Booking System",
        slug: "mybdb-book",
        description:
            "Built a vehicle booking system with user, HOD and administrator roles, including booking workflows, approval processes, vehicle management and booking history.",
        technologies: ["ASP.NET", "C#", "MySQL", "Flutter", "Dart"],
        images: [
            "/projects/bdb/dashboard.png",
            "/projects/bdb/cars.png",
            "/projects/bdb/apps.png",
            "/projects/bdb/book.png",
        ],
    },
]

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <nav className="border-b border-white/10 bg-slate-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="text-xl font-bold">
                        Aiman<span className="text-blue-400">.</span>
                    </Link>

                    <Link
                        href="/"
                        className="text-sm text-slate-300 transition hover:text-white"
                    >
                        Back Home
                    </Link>
                </div>
            </nav>

            <section className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                            Projects
                        </p>

                        <h1 className="text-3xl font-bold sm:text-5xl">
                            Selected projects
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                            A selection of systems and applications I worked on during my
                            academic studies and internship.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.slug}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                            >
                                <div className="grid h-64 grid-cols-2 grid-rows-2 gap-1 overflow-hidden border-b border-white/10 bg-slate-900">
                                    {project.images.map((image, index) => (
                                        <div key={image} className="relative overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className={`transition duration-300 hover:scale-105 ${project.slug === "mybdb-book"
                                                        ? "object-contain bg-slate-900 p-2"
                                                        : "object-cover"
                                                    }`}
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="p-7">
                                    <p className="mb-3 text-sm font-medium text-blue-400">
                                        {project.category}
                                    </p>

                                    <h2 className="text-2xl font-bold">{project.title}</h2>

                                    <p className="mt-4 leading-7 text-slate-300">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}