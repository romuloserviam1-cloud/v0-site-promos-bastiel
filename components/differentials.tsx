"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, BadgeCheck, Sparkles, DollarSign, Truck, HeartHandshake } from "lucide-react"

const differentials = [
  {
    icon: BadgeCheck,
    title: "Seleção Criteriosa",
    description: "Selecionamos as melhores promoções do dia, publicadas de forma rápida e organizada.",
  },
  {
    icon: Sparkles,
    title: "Descontos Reais",
    description: "Focamos apenas em ofertas com descontos verdadeiros, verificados pela nossa equipe.",
  },
  {
    icon: DollarSign,
    title: "100% Gratuito",
    description: "Não cobramos nada e nunca vamos cobrar. Nosso grupo é mantido por parcerias com as lojas.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Promoções de lojas com logística eficiente. Muitas com frete grátis e entrega expressa.",
  },
  {
    icon: CheckCircle2,
    title: "Lojas Verificadas",
    description: "Amazon, Mercado Livre e Shopee — só trabalhamos com marketplaces de confiança.",
  },
  {
    icon: HeartHandshake,
    title: "Sem Compromisso",
    description: "Entre e saia quando quiser. Sem perguntas, sem burocracia, total liberdade.",
  },
]

export function Differentials() {
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
      id="diferenciais"
      ref={sectionRef}
      className="py-20 px-4 opacity-0"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            O que nos diferencia é o compromisso com a qualidade. Reunimos oportunidades 
            confiáveis em um só lugar para facilitar sua economia.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
