import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap"
})
export const metadata: Metadata = {
  title: "WanderAI",
  description:
    "AI-powered travel planning app that creates personalized itineraries based on user preferences, travel history, and real-time data."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
