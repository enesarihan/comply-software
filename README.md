# Comply Software - iyzico Ödeme Entegrasyonu

Bu proje, iyzico ödeme sistemi entegrasyonu ile modern bir ödeme sayfası içermektedir.

## Özellikler

- 🚀 **iyzico Entegrasyonu**: HMACSHA256 kimlik doğrulama ile güvenli ödeme işlemleri
- 💳 **Esnek Taksit**: Taksitsiz, 2, 3, 6 ay faizsiz taksit seçenekleri
- 💰 **Dinamik Tutar**: Kullanıcı istediği tutarı belirleyebilir
- 🎨 **Modern UI**: Site tasarımına uygun responsive tasarım
- 🔒 **Güvenlik**: SSL şifreleme ve form doğrulama
- 📱 **Responsive**: Mobil ve desktop uyumlu
- 🧮 **Otomatik Hesaplama**: Taksit tutarları otomatik hesaplanır
- 🎉 **Success Animasyonu**: Konfeti ve motion animasyonları
- 📧 **Email Makbuz**: Ödeme sonrası otomatik email gönderimi
- 🖼️ **HTML Email**: Profesyonel HTML email template'i

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Environment Variables

Proje kök dizininde `.env.local` dosyası oluşturun:

```env
# iyzico API Konfigürasyonu
IYZICO_API_KEY=your-api-key-here
IYZICO_SECRET_KEY=your-secret-key-here

# Email Konfigürasyonu (Gmail için)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
COMPANY_EMAIL=company@complysoftware.com

# Alternatif SMTP Konfigürasyonu
# SMTP_HOST=smtp.yourdomain.com
# SMTP_PORT=587
# SMTP_USER=noreply@yourdomain.com
# SMTP_PASS=your-smtp-password

# Ortam Seçimi (development/production)
NODE_ENV=development
```

### 3. iyzico API Bilgileri

1. [iyzico Geliştirici Portalı](https://docs.iyzico.com/)'na gidin
2. Hesap oluşturun veya giriş yapın
3. API Key ve Secret Key bilgilerinizi alın
4. `.env.local` dosyasına bu bilgileri ekleyin

### 4. Email Konfigürasyonu

#### Gmail için App Password Oluşturma:
1. Google hesabınızda 2-Step Verification'ı etkinleştirin
2. [Google App Passwords](https://myaccount.google.com/apppasswords) sayfasına gidin
3. "Select app" dropdown'dan "Mail" seçin
4. "Select device" dropdown'dan "Other" seçin ve "Comply Software" yazın
5. Oluşturulan 16 haneli parolayı `EMAIL_PASS` olarak kullanın

#### Email Test Etme:
```bash
# Email konfigürasyonunu test edin
curl http://localhost:3000/api/send-receipt
```

### 5. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

## Kullanım

### Ödeme Sayfası

Ödeme sayfasına `/payment` route'u ile erişebilirsiniz:

```
http://localhost:3000/payment
```

### API Endpoints

- `POST /api/payment` - Ödeme işlemi başlatma
- `GET /api/payment` - Taksit bilgilerini getirme

## Taksit Seçenekleri

- **Taksitsiz**: %0 faiz (Tek çekim)
- **2 Ay**: %2 faiz
- **3 Ay**: %3 faiz  
- **6 Ay**: %8 faiz

## Özellikler

### Dinamik Tutar Belirleme
- Kullanıcı istediği tutarı girebilir (minimum 100 ₺)
- Taksit tutarları otomatik hesaplanır
- Gerçek zamanlı güncelleme

### Taksit Hesaplama
- Faiz oranları otomatik hesaplanır
- Aylık ödeme tutarları gösterilir
- Toplam ödeme tutarı hesaplanır
- Taksitsiz seçenek mevcut

### Güvenlik
- SSL şifreleme
- Form doğrulama
- iyzipay-node paketi ile güvenli API iletişimi
- Kart bilgileri güvenli işleme

## Test Kartları

iyzico sandbox ortamında test için kullanabileceğiniz kartlar:

- **Kart No**: 5528790000000008 (Halkbank MasterCard)
- **Son Kullanma**: 12/30
- **CVC**: 123

## Teknolojiler

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Payment**: iyzipay-node, iyzico API
- **Validation**: Form validation, Toast notifications

## Paket Bilgileri

- **iyzipay-node**: [GitHub](https://github.com/iyzico/iyzipay-node)
- **Versiyon**: 2.0.64 (Latest)
- **Lisans**: MIT

## Destek

Herhangi bir sorun yaşarsanız:

1. [iyzico Dokümantasyonu](https://docs.iyzico.com/)'nu inceleyin
2. [iyzipay-node GitHub](https://github.com/iyzico/iyzipay-node) sayfasını ziyaret edin
3. GitHub Issues'da sorun bildirin
4. iyzico destek ekibi ile iletişime geçin

## Lisans

MIT License
