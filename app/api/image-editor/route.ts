import { NextResponse } from "next/server";
import { fal } from "@fal-ai/client";

// FAL AI client konfigürasyonu
fal.config({
  credentials: process.env.FAL_KEY
});

export async function POST(req: Request) {
  try {
    const falKey = process.env.FAL_KEY;
    if (!falKey) {
      return NextResponse.json(
        { error: "FAL AI API anahtarı tanımlı değil. Lütfen FAL_KEY environment variable'ını ayarlayın." },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const image = formData.get("image") as File;
    const prompt = formData.get("prompt") as string;

    if (!image || !prompt) {
      return NextResponse.json(
        { error: "Görsel ve prompt gereklidir." },
        { status: 400 }
      );
    }

    // Dosya boyut kontrolü (10MB)
    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Görsel boyutu 10MB'dan küçük olmalıdır." },
        { status: 400 }
      );
    }

    // Dosya türü kontrolü
    if (!image.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Geçersiz dosya türü. Lütfen bir görsel dosyası yükleyin." },
        { status: 400 }
      );
    }

    // Görseli FAL AI'a yükle
    let imageUrl: string;
    try {
      imageUrl = await fal.storage.upload(image);
      console.log("Görsel FAL AI'a yüklendi:", imageUrl);
    } catch (uploadError) {
      console.error("Görsel yükleme hatası:", uploadError);
      return NextResponse.json(
        { error: "Görsel yüklenirken bir hata oluştu." },
        { status: 500 }
      );
    }

    // FAL AI Nano Banana Image-to-Image modeli ile düzenleme
    console.log("FAL AI Nano Banana modeli çağrılıyor...");
    
    const result = await fal.subscribe("fal-ai/nano-banana/edit", {
      input: {
        prompt: prompt,
        image_urls: [imageUrl],
        num_images: 1,
        output_format: "png" as const,
        sync_mode: false
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          console.log("İşlem devam ediyor:", update.logs?.map((log) => log.message).join(", "));
        }
      },
    });

    console.log("FAL AI sonucu:", result);

    // Sonuçları kontrol et
    if (!result.data || !result.data.images || result.data.images.length === 0) {
      console.error("FAL AI'dan geçersiz sonuç:", result);
      return NextResponse.json(
        { error: "Görsel üretilemedi. Lütfen farklı bir prompt deneyin." },
        { status: 500 }
      );
    }

    const editedImage = result.data.images[0];
    const description = result.data.description || "Görsel başarıyla düzenlendi.";

    return NextResponse.json({
      success: true,
      imageUrl: editedImage.url,
      description: description,
      originalPrompt: prompt,
      timestamp: Date.now(),
      requestId: result.requestId,
      // FAL AI'dan gelen ek bilgiler
      contentType: editedImage.content_type,
      fileName: editedImage.file_name,
      fileSize: editedImage.file_size
    });

  } catch (error) {
    console.error("FAL AI görsel düzenleme hatası:", error);
    
    // FAL AI özel hata mesajları
    if (error instanceof Error) {
      if (error.message.includes("401") || error.message.includes("unauthorized")) {
        return NextResponse.json(
          { error: "FAL AI API anahtarı geçersiz. Lütfen FAL_KEY'i kontrol edin." },
          { status: 401 }
        );
      }
      if (error.message.includes("429") || error.message.includes("rate limit")) {
        return NextResponse.json(
          { error: "Rate limit aşıldı. Lütfen biraz bekleyip tekrar deneyin." },
          { status: 429 }
        );
      }
      if (error.message.includes("400") || error.message.includes("bad request")) {
        return NextResponse.json(
          { error: "Geçersiz istek. Lütfen görsel ve prompt'u kontrol edin." },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        error: error instanceof Error 
          ? `Görsel düzenleme hatası: ${error.message}` 
          : "Görsel düzenlenirken beklenmeyen bir hata oluştu." 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "Comply AI Image Editor",
    powered_by: "Advanced AI Technology",
    model: "comply-ai/image-editor",
    description: "Comply Software'ın gelişmiş AI teknolojisi ile desteklenen profesyonel görsel düzenleme hizmeti",
    version: "1.0.0",
    supportedFormats: ["image/jpeg", "image/png", "image/webp"],
    maxFileSize: "10MB",
    features: [
      "🎨 Profesyonel AI görsel düzenleme",
      "🚀 Anında işleme ve sonuç",
      "💡 Doğal dil komutları",
      "🌟 Yüksek kalite çıktı",
      "🔧 Çoklu format desteği",
      "✨ Comply Software kalitesi"
    ],
    capabilities: [
      "Arka plan değiştirme",
      "Renk düzeltme",
      "Atmosfer ekleme", 
      "Stil transfer",
      "Nesnelerin düzenlenmesi",
      "Efekt ekleme"
    ],
    endpoints: {
      edit: "POST /api/image-editor - Görsel düzenleme",
      status: "GET /api/image-editor - API durumu"
    },
    requirements: {
      env: "FAL_KEY environment variable gerekli",
      docs: "https://fal.ai/models/fal-ai/nano-banana/edit/api"
    },
    company: {
      name: "Comply Software",
      website: "https://www.complysoftware.net",
      description: "Modern web teknolojileri ve AI çözümleri"
    }
  });
}