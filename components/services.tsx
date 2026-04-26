"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Bell, ShoppingCart, Shield, Clock, Gift } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Ofertas com Descontos Reais",
    description: "Selecionamos apenas promoções com descontos verdadeiros, verificados pela nossa equipe. Nada de preços inflados antes do desconto.",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Confiáveis",
    description: "Trabalhamos exclusivamente com lojas de confiança como Amazon, Mercado Livre e Shopee. Sua compra sempre protegida.",
  },
  {
    icon: Bell,
    title: "Notificações em Tempo Real",
    description: "Receba as promoções diretamente no seu WhatsApp. Ative as notificações e seja o primeiro a aproveitar as ofertas.",
  },
  {
    icon: Clock,
    title: "Promoções Diárias",
    description: "Todos os dias postamos as melhores ofertas selecionadas. Qualidade acima de quantidade — não lotamos seu WhatsApp.",
  },
  {
    icon: Shield,
    title: "Sem Compromisso",
    description: "Entre e saia quando quiser, sem burocracia. Nosso grupo é 100% gratuito e sempre será.",
  },
  {
    icon: Gift,
    title: "Variedade de Produtos",
    description: "Eletrônicos, casa, cozinha, moda, beleza, pet, brinquedos e muito mais. Promoções para todos os gostos.",
  },
]

export function Services() {
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
      id="servicos"
      ref={sectionRef}
      className="py-20 px-4 bg-card/50 opacity-0"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Economize com Facilidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Você entra no grupo, aproveita as ofertas e compra direto pelo link. 
            Simples assim. Não vendemos nada, apenas divulgamos as melhores oportunidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
