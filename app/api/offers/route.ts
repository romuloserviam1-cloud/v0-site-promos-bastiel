import { NextResponse } from "next/server"
import { getOffersFromWordPress } from "@/lib/wordpress"

export async function GET() {
  try {
    const offers = await getOffersFromWordPress()
    return NextResponse.json(offers)
  } catch (error) {
    console.error("Erro na API de ofertas:", error)
    return NextResponse.json(
      { error: "Erro ao buscar ofertas" },
      { status: 500 }
    )
  }
}
