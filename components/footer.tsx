import Link from "next/link"
import { Tag, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Tag className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Promos do Bastiel
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Seu canal digital dedicado a encontrar e divulgar as melhores promoções 
              da internet. Descontos reais, de lojas confiáveis, direto no seu WhatsApp.
            </p>
            <a
              href="https://instagram.com/promosdobastiel26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @promosdobastiel26
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Promos do Bastiel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
