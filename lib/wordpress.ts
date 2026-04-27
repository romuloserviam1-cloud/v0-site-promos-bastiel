// Configuração da API do WordPress
// Substitua WORDPRESS_URL pela URL do seu site WordPress
// Exemplo: https://seusite.wordpress.com ou https://seudominio.com

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || ""

export interface WordPressOffer {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_media: number
  acf?: {
    preco_original?: string
    preco_promocional?: string
    link_oferta?: string
    loja?: string
    porcentagem_desconto?: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export interface Offer {
  id: number
  title: string
  description: string
  imageUrl: string
  originalPrice: string
  salePrice: string
  discountPercent: string
  store: string
  link: string
}

// Dados de exemplo para quando o WordPress não está configurado
export const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Echo Dot 5a Geração",
    description: "Smart speaker com Alexa, som vibrante e design compacto",
    imageUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=400&fit=crop",
    originalPrice: "R$ 399,00",
    salePrice: "R$ 269,00",
    discountPercent: "33%",
    store: "Amazon",
    link: "#",
  },
  {
    id: 2,
    title: "Fone Bluetooth JBL Tune",
    description: "Fone de ouvido sem fio com graves potentes e 40h de bateria",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    originalPrice: "R$ 299,00",
    salePrice: "R$ 179,00",
    discountPercent: "40%",
    store: "Mercado Livre",
    link: "#",
  },
  {
    id: 3,
    title: "Air Fryer Mondial 4L",
    description: "Fritadeira elétrica sem óleo com timer e controle de temperatura",
    imageUrl: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    originalPrice: "R$ 449,00",
    salePrice: "R$ 249,00",
    discountPercent: "45%",
    store: "Shopee",
    link: "#",
  },
  {
    id: 4,
    title: "Smartwatch Xiaomi Band 8",
    description: "Pulseira inteligente com monitor cardíaco e 150+ modos de treino",
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    originalPrice: "R$ 279,00",
    salePrice: "R$ 159,00",
    discountPercent: "43%",
    store: "AliExpress",
    link: "#",
  },
]

export async function getOffersFromWordPress(): Promise<Offer[]> {
  // Se não há URL configurada, retorna dados de exemplo
  if (!WORDPRESS_URL) {
    return mockOffers
  }

  try {
    // Busca posts da categoria "ofertas" com campos ACF
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?categories_slug=ofertas&_embed&per_page=8`,
      {
        next: { revalidate: 300 }, // Revalida a cada 5 minutos
      }
    )

    if (!response.ok) {
      console.error("Erro ao buscar ofertas do WordPress:", response.statusText)
      return mockOffers
    }

    const posts: WordPressOffer[] = await response.json()

    return posts.map((post) => ({
      id: post.id,
      title: decodeHtmlEntities(post.title.rendered),
      description: decodeHtmlEntities(stripHtml(post.excerpt.rendered)),
      imageUrl:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      originalPrice: post.acf?.preco_original || "R$ 0,00",
      salePrice: post.acf?.preco_promocional || "R$ 0,00",
      discountPercent: post.acf?.porcentagem_desconto || "0%",
      store: post.acf?.loja || "Loja",
      link: post.acf?.link_oferta || "#",
    }))
  } catch (error) {
    console.error("Erro ao conectar com WordPress:", error)
    return mockOffers
  }
}

// Funções auxiliares
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim()
}

function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&nbsp;": " ",
  }
  return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity)
}
