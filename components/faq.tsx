"use client"

import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "É de graça mesmo?",
    answer: "Sim, 100% gratuito. Não cobramos nada e nunca vamos cobrar. Nosso grupo é mantido por parcerias com as próprias lojas.",
  },
  {
    question: "Posso sair quando quiser?",
    answer: "Sim, sem compromisso algum. Basta sair do grupo pelo WhatsApp a qualquer momento. Sem perguntas, sem burocracia.",
  },
  {
    question: "Que tipo de ofertas aparecem?",
    answer: "Eletrônicos, casa, cozinha, moda, beleza, pet, brinquedos e muito mais. Tudo de Amazon, Mercado Livre e Shopee com descontos reais verificados pela equipe.",
  },
  {
    question: "Com que frequência postam?",
    answer: "Diariamente, mas só as melhores ofertas selecionadas. Não lotamos seu WhatsApp — qualidade acima de quantidade.",
  },
  {
    question: "Vocês vendem produtos?",
    answer: "Não, não realizamos vendas diretas. Apenas divulgamos as melhores promoções e direcionamos você para as lojas oficiais.",
  },
  {
    question: "Os preços podem mudar?",
    answer: "Sim, os preços promocionais podem mudar a qualquer momento pelas lojas. Por isso recomendamos aproveitar rápido antes que acabe!",
  },
]

export function FAQ() {
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
      id="faq"
      ref={sectionRef}
      className="py-20 px-4 opacity-0"
    >
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Perguntas e Respostas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Respondemos as dúvidas mais comuns sobre nosso grupo de promoções.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
