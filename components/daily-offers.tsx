"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Tag, Clock } from "lucide-react"
import offersData from "@/data/offers.json"

export interface Offer {
  id: string
  title: string
  description: string
  imageUrl: string
  originalPrice: string
  salePrice: string
  discountPercent: string
  store: string
  link: string
}

export function DailyOffers() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Converte o objeto de ofertas em um array
  const offers: Offer[] = Object.entries(offersData).map(([key, offer]) => ({
    id: key,
    ...offer
  }))

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
      id="ofertas"
      ref={sectionRef}
      className="py-20 px-4 opacity-0"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            <Clock className="h-4 w-4" />
            Atualizadas diariamente
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ofertas do Dia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Confira as melhores promoções selecionadas hoje pela nossa equipe.
            Preços verificados e descontos reais.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer receber todas as ofertas em primeira mão?
          </p>
          <Button asChild size="lg" className="font-semibold">
            <a
              href="https://chat.whatsapp.com/seu-grupo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar no Grupo do WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Discount Badge */}
        <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-bold">
          <Tag className="h-3 w-3 mr-1" />
          -{offer.discountPercent}
        </Badge>
        {/* Store Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-background/90 text-foreground"
        >
          {offer.store}
        </Badge>
      </div>

      <CardContent className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {offer.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {offer.description}
        </p>

        {/* Prices */}
        <div className="mb-4">
          <span className="text-sm text-muted-foreground line-through">
            {offer.originalPrice}
          </span>
          <div className="text-2xl font-bold text-primary">{offer.salePrice}</div>
          <p className="text-xs text-muted-foreground mt-1">
            O preço e disponibilidade do produto podem variar, pois as ofertas são por tempo limitado.
          </p>
        </div>

        {/* CTA Button */}
        <Button asChild className="w-full group/btn">
          <a href={offer.link} target="_blank" rel="noopener noreferrer">
            Ver Oferta
            <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
