"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Tag, Clock, Loader2 } from "lucide-react"

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
  const [offers, setOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Busca ofertas da API
  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await fetch("/api/offers", {
          cache: "no-store",
        })
        
        if (!response.ok) {
          throw new Error("Falha ao carregar ofertas")
        }
        
        const data = await response.json()
        
        // Converte o objeto de ofertas em um array
        const offersArray: Offer[] = Object.entries(data).map(([key, offer]) => ({
          id: key,
          ...(offer as Omit<Offer, "id">)
        }))
        
        setOffers(offersArray)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    fetchOffers()
  }, [])

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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Carregando ofertas...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-destructive">{error}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </Button>
          </div>
        )}

        {/* Offers Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        )}

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
