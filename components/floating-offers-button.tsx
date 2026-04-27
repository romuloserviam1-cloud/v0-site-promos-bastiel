"use client"

import { useEffect, useState } from "react"
import { Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingOffersButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOffersInView, setIsOffersInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 300px
      setIsVisible(window.scrollY > 300)
    }

    const offersSection = document.getElementById("ofertas")
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsOffersInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    if (offersSection) {
      observer.observe(offersSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas")
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Esconde quando a seção de ofertas está visível ou antes de rolar 300px
  if (!isVisible || isOffersInView) return null

  return (
    <Button
      onClick={scrollToOffers}
      className="fixed bottom-6 right-6 z-50 h-14 px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-subtle group"
      size="lg"
    >
      <Tag className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
      <span className="font-semibold">Ofertas do Dia</span>
    </Button>
  )
}
