"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

// Contexto para compartir el estado de la música entre páginas
type MusicContextType = {
  isPlaying: boolean
  toggleMusic: () => void
}

export const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  toggleMusic: () => {},
})

export const useMusicPlayer = () => useContext(MusicContext)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Crear el elemento de audio una sola vez
    const audioElement = new Audio(
      "https://res.cloudinary.com/douyiejyz/video/upload/v1749653557/wedding_song_rfdvh4.mp3",
    )
    audioElement.loop = true
    audioElement.volume = 0.3
    audioElement.preload = "auto"
    setAudio(audioElement)

    // Intentar reproducir automáticamente
    const playAudio = async () => {
      try {
        await audioElement.play()
        setIsPlaying(true)
      } catch (error) {
        console.log("La reproducción automática fue bloqueada por el navegador:", error)
        setIsPlaying(false)
      }
    }

    // Pequeño delay para intentar reproducir
    const timer = setTimeout(playAudio, 1000)

    return () => {
      clearTimeout(timer)
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [])

  const toggleMusic = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return <MusicContext.Provider value={{ isPlaying, toggleMusic }}>{children}</MusicContext.Provider>
}

export function MusicControl() {
  const { isPlaying, toggleMusic } = useMusicPlayer()

  return (
    <Button
      onClick={toggleMusic}
      variant="ghost"
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white w-12 h-12"
      title={isPlaying ? "Pausar música" : "Reproducir música"}
    >
      {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
    </Button>
  )
}
