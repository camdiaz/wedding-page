"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMusicPlayer } from "@/components/music-player"

export default function InvitacionPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [loaded, setLoaded] = useState(false)
  const { isPlaying, toggleMusic } = useMusicPlayer()

  // Efecto de animación al cargar
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Contador regresivo
  useEffect(() => {
    const weddingDate = new Date("2025-09-20T00:00:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/Ehjf2ua9ZMLntXp46", "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Header/Hero Section */}
      <div className="relative h-screen flex flex-col">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/couple-bg.jpeg" alt="Laura y John" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Navegación */}
        <nav className="relative z-10 flex justify-center pt-8">
          <div className="flex space-x-8 text-white text-sm tracking-widest">
            <a href="#nosotros" className="hover:text-stone-300 transition-colors">
              NOSOTROS
            </a>
            <a href="#invitacion" className="hover:text-stone-300 transition-colors">
              INVITACIÓN
            </a>
            <a href="#ubicacion" className="hover:text-stone-300 transition-colors">
              UBICACIÓN
            </a>
            <a href="#confirmar" className="hover:text-stone-300 transition-colors">
              CONFIRMAR
            </a>
          </div>
        </nav>

        {/* Contenido principal del hero */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
          {/* Nombres */}
          <div className="mb-8">
            <h1
              className="text-4xl md:text-6xl font-script text-amber-700 mb-2"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Laura <span className="text-amber-600">&</span> John
            </h1>
          </div>

          {/* Texto principal */}
          <div className="mb-8">
            <h2
              className="text-3xl md:text-5xl font-script text-white mb-4"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Tú y yo. Solo nosotros dos.
            </h2>
            <p className="text-white text-lg tracking-widest">20. 09. 2025</p>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="relative z-10 pb-8 flex justify-center">
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </div>

      {/* Contador regresivo */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif mb-8 text-gray-800">Faltan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-stone-100 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.days}</div>
              <div className="text-sm text-gray-600">Días</div>
            </div>
            <div className="bg-stone-100 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Horas</div>
            </div>
            <div className="bg-stone-100 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minutos</div>
            </div>
            <div className="bg-stone-100 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de invitación */}
      <section id="invitacion" className="py-16 bg-stone-50 relative z-10 overflow-visible">
        {/* Imagen decorativa fuera del container, para que sobresalga hacia fuera sin recorte */}
        <div className="absolute -top-32 -bottom-32 -right-32 pointer-events-none z-0">
          <Image src="/images/flowers.png" alt="" width={600} height={400} className="opacity-50 rotate-12" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h3 className="text-3xl font-script mb-8 text-gray-800" style={{ fontFamily: "Dancing Script, cursive" }}>
            Nuestra Historia
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Con gran alegría en nuestros corazones, Laura y John solicitan el placer de su compañía para celebrar
            nuestro enlace matrimonial. Será un honor compartir este momento especial con nuestros seres queridos.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-lg font-semibold text-gray-800">20 de Septiembre, 2025</span>
            </div>
            <p className="text-gray-600 mb-6">Sábado • 4:00 PM</p>

            <Button
              onClick={openGoogleMaps}
              className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded-full"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ver Ubicación en Maps
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de la propuesta */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-3xl font-script mb-8 text-gray-800" style={{ fontFamily: "Dancing Script, cursive" }}>
            La Propuesta
          </h3>
          <p className="text-gray-600 leading-relaxed">
            En la primavera de 2024, John decidió dar el paso más importante de su vida. Después de años de amor y
            complicidad, eligió el lugar perfecto para pedirle a Laura que fuera su esposa. Con el corazón lleno de amor
            y las manos temblando de emoción, se arrodilló y le preguntó si quería pasar el resto de su vida a su lado.
          </p>
        </div>
      </section>

      {/* Galería de fotos */}
      <section className="py-16 bg-stone-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/couple-bg.jpeg"
                alt="Laura y John"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/couple-bg.jpeg"
                alt="Laura y John"
                width={400}
                height={400}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de confirmación */}
      <section id="confirmar" className="py-16 bg-white relative z-10">
        {/* Orquídea decorativa del lado izquierdo */}
        <div className="absolute -top-20 -left-20 pointer-events-none z-0">
          <Image src="/images/flowers.png" alt="" width={600} height={400} className="rotate-180 opacity-50" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h3 className="text-3xl font-script mb-8 text-gray-800" style={{ fontFamily: "Dancing Script, cursive" }}>
            Confirma tu Asistencia
          </h3>
          <p className="text-gray-600 mb-8">
            Tu presencia es el regalo más importante para nosotros. Por favor confirma tu asistencia antes del 1 de
            septiembre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Confirmar Asistencia
            </Button>
            <Button variant="outline" className="border-stone-300 text-stone-700 px-8 py-3 rounded-full">
              No Podré Asistir
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-800 text-white text-center relative z-10">
        <p className="text-sm">Con amor, Laura & John • 20 de Septiembre, 2025</p>
      </footer>
    </div>
  )
}
