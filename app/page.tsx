"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useMusicPlayer } from "@/components/music-player"

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const { isPlaying, toggleMusic } = useMusicPlayer()

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
      {/* Orquídeas decorativas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/flowers.png"
          alt=""
          width={300}
          height={400}
          className="absolute top-0 right-0 opacity-15"
        />
        <Image
          src="/images/flowers.png"
          alt=""
          width={250}
          height={350}
          className="absolute bottom-0 left-0 opacity-15 -rotate-45"
        />
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda - Nombres principales */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div
                className={`transition-all duration-1000 ease-out ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-8xl md:text-7xl font-script text-amber-700 leading-tight">
                  <span className="block ml-0" style={{ fontFamily: "Dancing Script, cursive" }}>
                    Laura
                  </span>
                  <span className="text-4xl md:text-5xl italic font-light block ml-16 md:ml-12">&</span>
                  <span className="block ml-32 md:ml-24" style={{ fontFamily: "Dancing Script, cursive" }}>
                    John
                  </span>
                </h1>
              </div>
            </div>

            {/* Columna derecha - RSVP */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end order-last lg:order-none">
              <div
                className={`transition-all duration-1000 delay-700 ease-out ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Link href="/invitacion">
                  <Button
                    variant="ghost"
                    className="text-2xl font-light text-amber-700 hover:text-amber-800 hover:bg-transparent p-4 border border-amber-700/30 hover:border-amber-700/50 transition-all duration-300"
                  >
                    INVITACIÓN
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Texto central */}
          <div className="text-center mt-12 mb-8">
            <div
              className={`transition-all duration-1000 delay-500 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm tracking-widest text-black uppercase mb-6">Gracias por hacer parte de nuestra historia y queremos que en este dia tan especial estes con nosotros</p>
            </div>
          </div>

          {/* Fecha y ubicación */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div
              className={`text-center transition-all duration-1000 delay-600 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm tracking-widest text-black uppercase">Septiembre 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
