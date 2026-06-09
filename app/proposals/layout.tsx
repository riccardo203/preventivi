import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function ProposalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  )
}
