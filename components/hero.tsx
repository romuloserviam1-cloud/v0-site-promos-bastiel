"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Percent, Star } from "lucide-react"

const GROUP_LINK = "https://chat.whatsapp.com/Gk46MEKPcJmIYDPQkxjJPf?mode=gi_t"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 opacity-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Percent className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Gratuito</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            As Melhores{" "}
            <span className="text-primary">Promoções</span>
            {" "}da Internet em Um Só Lugar
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            Ajudamos você a economizar dinheiro encontrando e divulgando as melhores promoções da internet. 
            Descontos reais, de lojas confiáveis, direto no seu WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href={GROUP_LINK} target="_blank" rel="noopener noreferrer">
                Entre Já no Grupo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href="#servicos">
                Saiba Como Funciona
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-sm">Amazon, Shopee, Mercado Livre</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">Ofertas Verificadas</span>
            </div>
            <div className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-primary" />
              <span className="text-sm">Descontos Reais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
