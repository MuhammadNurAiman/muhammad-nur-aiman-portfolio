import Image from "next/image"
import Navbar from "@/components/Navbar"

const images = [
  "/projects/nawabs/map.png",
  "/projects/nawabs/layout.png",
  "/projects/nawabs/polygon.png",
  "/projects/nawabs/discharge.png",
]

export default function NawabsProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Internship Project
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            NAWABS Water Monitoring Portal
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A web-based water monitoring portal that presents spatial and
            timeseries information through interactive maps, charts and
            station-based dashboards.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Leaflet",
              "Recharts",
              "REST API",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
              >
                <Image
                  src={image}
                  alt={`NAWABS project screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-300 lg:col-span-2">
              <p>
                During my internship, I contributed to the development and
                improvement of multiple modules within the NAWABS portal.
              </p>

              <p>
                My work focused on displaying water-related data using
                interactive maps, station markers, GIS layers and timeseries
                charts connected to API-based data sources.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold">My Contributions</h2>
            </div>

            <div className="lg:col-span-2">
              <ul className="space-y-4 text-slate-300">
                <li>• Developed responsive map-based monitoring interfaces.</li>
                <li>• Integrated GIS and timeseries APIs into portal modules.</li>
                <li>• Built station panels, filters and interactive charts.</li>
                <li>• Improved default selection and data-loading behaviour.</li>
                <li>• Debugged API paths, missing data and interface issues.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="leading-7 text-slate-300">
              This project contains organisational and operational data.
              Screenshots are presented for portfolio demonstration only, and
              confidential source code or private API information is not shared.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}