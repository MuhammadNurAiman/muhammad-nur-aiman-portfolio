import Image from "next/image"
import Navbar from "@/components/Navbar"

const images = [
  "/projects/bdb/dashboard.png",
  "/projects/bdb/cars.png",
  "/projects/bdb/apps.png",
  "/projects/bdb/book.png",
]

export default function MyBdbProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Academic Project
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            myBDB Book Vehicle Booking System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A vehicle booking platform designed to manage booking requests,
            approval workflows, vehicle availability and booking records.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["ASP.NET", "C#", "MySQL", "Flutter", "Dart"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
              >
                <Image
                  src={image}
                  alt={`myBDB Book project screenshot ${index + 1}`}
                  fill
                  className="object-contain p-4"
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
                The system was developed to simplify the process of requesting
                and approving company vehicle bookings.
              </p>

              <p>
                It includes separate interfaces and permissions for users,
                Heads of Department and administrators.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold">Main Features</h2>
            </div>

            <div className="lg:col-span-2">
              <ul className="space-y-4 text-slate-300">
                <li>• User registration and role-based authentication.</li>
                <li>• Vehicle availability and booking request forms.</li>
                <li>• HOD and administrator approval workflows.</li>
                <li>• Vehicle, booking and user management.</li>
                <li>• Booking history and status tracking.</li>
                <li>• Mobile interfaces developed using Flutter.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold">What I Learned</h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-300 lg:col-span-2">
              <p>
                This project strengthened my understanding of database design,
                role-based systems, approval workflows and connecting web and
                mobile interfaces to backend data.
              </p>
            </div>
          </div>
          <div className="mt-16 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="leading-7 text-slate-300">
              This project was developed for academic and portfolio demonstration
              purposes. Screenshots are shown to highlight the system design and
              features, while sensitive company or user information is not disclosed.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}