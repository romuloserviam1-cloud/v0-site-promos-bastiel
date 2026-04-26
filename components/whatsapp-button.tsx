"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://chat.whatsapp.com/Gk46MEKPcJmIYDPQkxjJPf?mode=gi_t"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110"
      aria-label="Entrar no grupo via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
