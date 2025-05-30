// app/api/contact/route.ts
import { NextResponse } from "next/server"; // App Router API rotaları için NextResponse
import nodemailer from "nodemailer";

// Formdan gelecek verilerin tipini tanımlayalım
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string; // Şirket alanı isteğe bağlı olabilir
  message: string;
}

// POST isteğini karşılamak için dışa aktarılan fonksiyon
export async function POST(req: Request) {
  // App Router'da req bir Request nesnesidir
  try {
    const body: FormData = await req.json(); // Body'yi JSON olarak ayrıştır
    const { firstName, lastName, email, company, message } = body;

    // Ortam değişkenlerinin tanımlı olup olmadığını kontrol et
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_RECEIVER
    ) {
      console.error(
        "ENV HATA: Ortam değişkenleri tanımlı değil. Lütfen .env.local dosyasını kontrol edin ve sunucuyu yeniden başlatın."
      );
      // Hata durumunda JSON yanıtı ve 500 status kodu döndür
      return NextResponse.json(
        { message: "Sunucu yapılandırma hatası: E-posta ayarları eksik." },
        { status: 500 }
      );
    }

    // Nodemailer transporter'ı oluştur
    const transporter = nodemailer.createTransport({
      service: "gmail", // Kullandığınız e-posta servisinin adını buraya yazın
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-postayı gönder
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Kimden gönderileceği
      to: process.env.EMAIL_RECEIVER, // E-postanın size geleceği adres
      subject: `Yeni İletişim Formu Mesajı: ${firstName} ${lastName}`,
      html: `
        <p><strong>Ad:</strong> ${firstName}</p>
        <p><strong>Soyad:</strong> ${lastName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Şirket:</strong> ${company || "Belirtilmemiş"}</p>
        <p><strong>Mesaj:</strong><br/> ${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Başarılı yanıt
    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Hata durumunda hata mesajı ve 500 status kodu döndür
    console.error("E-posta gönderme hatası detayı:", error);
    console.error("Hata kodu:", error.code);
    console.error("Hata mesajı:", error.message);
    console.error("Hata yanıtı:", error.response);
    console.error("Hata yanıt kodu:", error.responseCode);

    return NextResponse.json(
      {
        message: "Mesaj gönderilirken bir hata oluştu.",
        error: error.message,
        errorCode: error.code || "UNKNOWN_ERROR",
      },
      { status: 500 }
    );
  }
}
