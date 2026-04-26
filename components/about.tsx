"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Users, Clock, ShieldCheck, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "5.000+", label: "Membros Ativos" },
  { icon: Clock, value: "24/7", label: "Promoções Diárias" },
  { icon: ShieldCheck, value: "100%", label: "Lojas Confiáveis" },
  { icon: TrendingUp, value: "50%+", label: "Economia Média" },
]

export function About() {
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
      id="sobre"
      ref={sectionRef}
      className="py-20 px-4 opacity-0"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Sua Fonte Confiável de{" "}
              <span className="text-primary">Promoções</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Promos do Bastiel</strong> nasceu com uma missão clara: 
                ajudar você a economizar de verdade. Somos um canal digital dedicado a encontrar e divulgar 
                as melhores promoções da internet, sempre com descontos reais e de lojas confiáveis.
              </p>
              <p>
                Nossa equipe trabalha diariamente para selecionar as melhores ofertas de lojas como 
                <strong className="text-foreground"> Amazon, Mercado Livre e Shopee</strong>, garantindo 
                que você tenha acesso às oportunidades mais vantajosas do mercado.
              </p>
              <p>
                Não realizamos vendas diretas — apenas indicamos as melhores oportunidades e direcionamos 
                você para as lojas oficiais. <span className="text-primary font-medium">Qualidade e relacionamento 
                duradouro são fundamentais para o nosso sucesso.</span>
              </p>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <p className="text-foreground font-medium">
                &ldquo;Nosso diferencial está na seleção das melhores promoções do dia, publicadas de forma 
                rápida e organizada. Focamos apenas em ofertas com descontos reais, garantindo que você 
                encontre oportunidades confiáveis em um só lugar.&rdquo;
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bastiel Photo Section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <Image
              src="/images/bastiel.png"
              alt="Bastiel - Fundador do Promos do Bastiel"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-6 text-center text-muted-foreground text-lg">
            <span className="text-primary font-semibold">Bastiel</span> - Fundador e Curador de Promoções
          </p>
        </div>
      </div>
    </section>
  )
}
