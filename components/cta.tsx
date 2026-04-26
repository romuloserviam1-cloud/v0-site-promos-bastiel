"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5567991030163?text=Olá! Quero entrar no grupo de promoções!"

export function CTA() {
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
      className="py-20 px-4 bg-[#141413] opacity-0"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Comece a Economizar{" "}
            <span className="text-primary">Agora Mesmo</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto text-pretty">
            Entre no grupo gratuito e receba as melhores promoções da internet 
            diretamente no seu WhatsApp. Sem compromisso, sem custos.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              100% Gratuito
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Saia Quando Quiser
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Descontos Reais
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Entre Já no Grupo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
