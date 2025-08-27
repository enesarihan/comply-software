import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import React from 'react';
import PaymentReceiptEmail, { PaymentReceiptData } from '../../../lib/reactEmailTemplate';

// Text receipt generator
const generateTextReceipt = (data: PaymentReceiptData): string => {
  return `
COMPLY SOFTWARE - ÖDEME MAKBUZU
=====================================

🎉 ÖDEME BAŞARILI!

Sayın ${data.customerInfo.firstName} ${data.customerInfo.lastName},
Ödemeniz başarıyla tamamlanmıştır.

İŞLEM DETAYLARI
=====================================
İşlem Numarası: ${data.paymentId}
İşlem Tarihi: ${data.transactionDate}
Ödenen Tutar: ${data.amount.toLocaleString('tr-TR')} ₺
Ürün/Hizmet: ${data.productName}
Taksit: ${data.installment === 0 ? 'Taksitsiz' : `${data.installment} Ay`}
Ödeme Yöntemi: Kredi Kartı

MÜŞTERİ BİLGİLERİ
=====================================
Ad Soyad: ${data.customerInfo.firstName} ${data.customerInfo.lastName}
E-posta: ${data.customerInfo.email}
Telefon: ${data.customerInfo.phone}
Adres: ${data.customerInfo.address}, ${data.customerInfo.city}

GÜVENLİK
=====================================
🔒 Bu işlem SSL sertifikası ile güvenli bir şekilde gerçekleştirilmiştir.
iyzico güvenli ödeme altyapısı kullanılmıştır.

İLETİŞİM
=====================================
📧 E-posta: complysoftware@gmail.com
🌐 Web: https://complysoftware.net
📞 Telefon: +90 (552) 584-5941

© ${new Date().getFullYear()} Comply Software. Tüm hakları saklıdır.

Bu e-posta otomatik olarak oluşturulmuştur.
  `;
};

// Email configuration
const createTransporter = () => {
  // Gmail için örnek konfigürasyon
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gmail adresiniz
      pass: process.env.EMAIL_PASS  // Gmail app password
    }
  });

  // Diğer email servis sağlayıcıları için alternatif:
  /*
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  */
};

export async function POST(request: NextRequest) {
  try {
    const receiptData: PaymentReceiptData = await request.json();

    // Email transporter oluştur
    const transporter = createTransporter();

    // HTML ve text içeriği oluştur - React Email template
    const emailComponent = React.createElement(PaymentReceiptEmail, { data: receiptData });
    const htmlContent = await render(emailComponent);
    const textContent = generateTextReceipt(receiptData);
    
    console.log('React Email template rendered successfully');

    // Email seçenekleri
    const mailOptions: any = {
      from: {
        name: 'Comply Software',
        address: process.env.EMAIL_USER || 'noreply@complysoftware.com'
      },
      to: receiptData.customerInfo.email,
      subject: `🎉 Ödeme Makbuzu - ${receiptData.paymentId} | Comply Software`,
      html: htmlContent,
      text: textContent,
      attachments: [
        {
          filename: 'logo.png',
          path: './public/logo.png',
          cid: 'logo', // Content-ID for embedding in HTML
          encoding: 'base64',
          contentDisposition: 'inline'
        },
        {
          filename: 'check-icon.png',
          path: './public/check-icon.png',
          cid: 'checkicon', // Content-ID for embedding in HTML
          encoding: 'base64',
          contentDisposition: 'inline'
        }
      ],
      // Email headers
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // BCC olarak company email ekle (kopyayı kendinize göndermek için)
    if (process.env.COMPANY_EMAIL) {
      mailOptions.bcc = process.env.COMPANY_EMAIL;
    }

    console.log('Sending payment receipt email to:', receiptData.customerInfo.email);
    console.log('Payment ID:', receiptData.paymentId);

    // Email gönder
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Ödeme makbuzu email olarak gönderildi'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Hata türüne göre detaylı mesaj
    let errorMessage = 'Email gönderilirken bir hata oluştu';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email giriş bilgileri hatalı';
      } else if (error.message.includes('Network')) {
        errorMessage = 'Ağ bağlantısı hatası';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Email kimlik doğrulama hatası';
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Email konfigürasyonunu test etmek için GET endpoint
export async function GET() {
  try {
    const transporter = createTransporter();
    
    // SMTP bağlantısını test et
    await transporter.verify();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email konfigürasyonu başarılı' 
    });
    
  } catch (error) {
    console.error('Email configuration test failed:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Email konfigürasyonu hatalı',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
