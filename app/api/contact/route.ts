// app/api/contact/route.ts
import { NextResponse } from "next/server"; // App Router API rotaları için NextResponse
import nodemailer from "nodemailer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: FormData = await req.json();
    const { firstName, lastName, email, company, message } = body;

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_RECEIVER
    ) {
      console.error(
        "ENV HATA: Ortam değişkenleri tanımlı değil. Lütfen .env.local dosyasını kontrol edin ve sunucuyu yeniden başlatın."
      );

      return NextResponse.json(
        { message: "Sunucu yapılandırma hatası: E-posta ayarları eksik." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Yeni İletişim Formu Mesajı: ${firstName} ${lastName}`,
      html: `
        <p><strong>Ad:</strong> ${firstName}</p>
        <p><strong>Soyad:</strong> ${lastName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Şirket:</strong> ${company || "Belirtilmemiş"}</p>
        <p><strong>Mesaj:</strong><br/> ${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
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
