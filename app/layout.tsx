import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MusicProvider, MusicControl } from "@/components/music-player"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Laura & John",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/flowers.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <MusicProvider>
          {children}
          <MusicControl />
        </MusicProvider>
      </body>
    </html>
  )
}
