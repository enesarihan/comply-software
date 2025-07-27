import { NextResponse } from "next/server";
import { askGemini } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Geçersiz prompt." }, { status: 400 });
    }
    const response = await askGemini(prompt);
    return NextResponse.json({ response });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
