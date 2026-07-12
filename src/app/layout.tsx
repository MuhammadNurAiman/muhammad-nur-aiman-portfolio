import type { Metadata } from "next"
import "./globals.css"

export const metadata = {
  title: "Muhammad Nur Aiman | Software Engineer Portfolio",
  description:
    "Portfolio of Muhammad Nur Aiman, a Software Engineering student with experience in web development, dashboards and data-driven applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}