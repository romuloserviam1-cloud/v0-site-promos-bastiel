import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "offers.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const offers = JSON.parse(fileContents)

    return NextResponse.json(offers, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    })
  } catch (error) {
    console.error("Error reading offers:", error)
    return NextResponse.json({ error: "Failed to load offers" }, { status: 500 })
  }
}
