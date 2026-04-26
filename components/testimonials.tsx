"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Membro há 6 meses",
    content: "Economizei mais de R$ 800 em três meses! As promoções são reais e chegam rápido. Recomendo demais para quem quer gastar menos.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Membro há 1 ano",
    content: "O melhor grupo de promoções que já participei. Não enchem meu WhatsApp com spam, só mandam ofertas que realmente valem a pena.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Membro há 4 meses",
    content: "Comprei um notebook com 40% de desconto graças ao grupo! A equipe é muito rápida em postar as ofertas antes de acabar.",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    role: "Membro há 8 meses",
    content: "Confiança total. Todas as promoções que aproveitei foram de lojas sérias e os produtos chegaram certinho. Muito obrigado!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Membro há 3 meses",
    content: "Achei incrível ser totalmente gratuito! Já economizei bastante em compras para casa e para os pets. Super recomendo.",
    rating: 5,
  },
  {
    name: "Pedro Henrique",
    role: "Membro há 5 meses",
    content: "Qualidade das ofertas é excelente. Não é igual outros grupos que postam qualquer coisa. Aqui só vem promoção boa mesmo.",
    rating: 5,
  },
]

export function Testimonials() {
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
      id="depoimentos"
      ref={sectionRef}
      className="py-20 px-4 bg-card/50 opacity-0"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            O Que Nossos Membros Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Milhares de pessoas já economizam com a gente. Veja o que nossos membros 
            têm a dizer sobre a experiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
