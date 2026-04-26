"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5567991030163?text=Olá! Quero entrar no grupo de promoções!"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Como Funciona" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Tag className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Promos do Bastiel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Quero Tirar Dúvidas
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Quero Tirar Dúvidas
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
