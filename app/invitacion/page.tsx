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
    <div className="min-h-screen bg-[#fefcf9] relative overflow-hidden">
      {/* Header/Hero Section */}
      <div className="relative h-screen flex flex-col">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/couple-bg.jpeg" alt="Laura y John" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Navegación */}
        {/* <nav className="relative z-10 flex justify-center pt-8">
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
        </nav> */}

        {/* Contenido principal del hero */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
          {/* Nombres */}
          <div className="mb-8">
            <h1
              className="text-6xl md:text-[12rem] font-script text-[#dec568] mb-2"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Laura <span className="text-[#dec568]">&</span> John
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

      {/* Sección de la historia */}
      <section id="nosotros" className="py-32 bg-white relative z-10">
        {/* Imagen decorativa fuera del container, para que sobresalga hacia fuera sin recorte */}
        <div className="absolute -top-5 -right-20 pointer-events-none z-0">
          <Image src="/images/flowers.png" alt="" width={500} height={200} className="opacity-30 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-4xl font-script mb-12 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>
            Nuestra Historia
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            El amor nos unió en un camino lleno de sueños y complicidad.
            Hoy queremos celebrar este paso tan importante con las personas que han sido parte de nuestra historia.
            Su presencia no solo alegrará nuestro día, sino que lo hará verdaderamente inolvidable.
            <br /><br />¡Acompáñennos a celebrar el comienzo de esta nueva aventura juntos!
          </p>
        </div>
      </section>

      {/* Contador regresivo */}
      <section className="py-16 bg-[#fefcf9] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-script mb-12 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>Faltan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.days}</div>
              <div className="text-sm text-gray-600">Días</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Horas</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minutos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-800">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de invitación */}
      <section id="lugar" className="py-16 bg-white relative z-10 overflow-visible">
        {/* Imagen decorativa fuera del container, para que sobresalga hacia fuera sin recorte */}
        <div className="absolute -top-32 -bottom-32 -left-32 pointer-events-none z-0">
          <Image src="/images/flowers.png" alt="" width={600} height={400} className="opacity-30 rotate-180" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h3 className="text-4xl font-script mb-8 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>
            Lugar
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Esperamos que puedas llegar al lugar correcto y justo a tiempo para que nos acompañes en este momento tan especial
            <br />
            Por lo cual te indicamos la siguiente información:
          </p>

          <div className="bg-[#fefcf9] p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-lg font-semibold text-gray-800">20 de Septiembre, 2025</span>
            </div>
            <p className="text-gray-600 mb-6">Sábado • 6:00 PM</p>
            <br />Centro de Eventos Trinitarias
            <p className="text-gray-600 mb-6">
              <span className="font-bold">Dirección:</span>
              <br />
              <span className="text-gray-800">
                Cl. 81 # 42B - 70, Nte. Centro Historico, Barranquilla, Atlántico
              </span>
            </p>

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

      {/* Sección de Dresscode */}
      <section id="dresscode" className="py-16 bg-[#fefcf9] relative z-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-4xl font-script mb-8 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>
            Dresscode
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Para que te veas mas que perfect@, te sugerimos las siguientes ideas:
            <br />
            <span className="text-[#dec568] font-medium">Formal / Elegante</span>
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-4">Caballeros</h4>
                <p className="text-gray-600 mb-4">
                  Traje negro
                  <br />
                  Camisa blanca
                </p>
                <Button
                  onClick={() => window.open("https://pin.it/2HOCPMQxk", "_blank")}
                  className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded-full"
                >
                  Ver Inspiración
                </Button>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-4">Damas</h4>
                <p className="text-gray-600 mb-4">
                  Vestido largo sin estampados
                  <br />
                  Reservado: <span className="text-[#dec568] font-medium">Blanco</span> para la novia
                </p>
                <Button
                  onClick={() => window.open("https://pin.it/9YQA9WWZs", "_blank")}
                  className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded-full"
                >
                  Ver Inspiración
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Regalos */}
      <section id="regalos" className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h3 className="text-4xl font-script mb-12 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>
            Regalos
          </h3>
          <p className="text-gray-600 mb-12">
            Si quieres regalar algo, te sugerimos que sea algo que nos ayude a iniciar nuestra nueva vida juntos.
          </p>
        </div>
      </section>

      {/* Sección de confirmación */}
      <section id="confirmar" className="py-32 bg-[#fefcf9] relative z-10">
        {/* Imagen decorativa fuera del container, para que sobresalga hacia fuera sin recorte */}
        <div className="absolute -top-5 -right-20 pointer-events-none z-0">
          <Image src="/images/flowers.png" alt="" width={700} height={200} className="opacity-30 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h3 className="text-4xl font-script mb-12 text-[#dec568]" style={{ fontFamily: "Dancing Script, cursive" }}>
            Confirmar Asistencia
          </h3>
          <p className="text-gray-600 mb-12">
            Tu presencia es el regalo más importante para nosotros. Por favor confirma tu asistencia antes del 1 de
            septiembre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Confirmar Asistencia
            </Button>
            <Button variant="outline" className="border-stone-300 text-stone-700 px-8 py-3 rounded-full">
              No Podré Asistir
            </Button>
          </div>
        </div>
      </section>
      

      {/* Galería de fotos */}
      <section className="py-16 bg-white relative z-10">
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

      {/* Footer */}
      <footer className="py-8 bg-stone-800 text-white text-center relative z-10">
        <p className="text-sm">© 2025 Created with ♥ by Camila Diaz. All rights reserved</p>
      </footer>
    </div>
  )
}
