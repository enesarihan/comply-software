# Comply Software - AI Powered Web Solutions

Bu proje, modern web teknolojileri ve AI entegrasyonları ile geliştirilmiş bir kurumsal web sitesi ve ödeme sistemi içermektedir.

## Özellikler

### 🎨 AI Görsel Editörü (Yeni!)
- **FAL AI Nano Banana**: Google'ın state-of-the-art görsel düzenleme modeli
- **Gerçek Zamanlı Düzenleme**: Doğal dil komutları ile görsel düzenleme
- **Profesyonel Kalite**: Yüksek çözünürlüklü AI destekli görsel üretimi
- **Çoklu Format**: PNG, JPEG, WebP desteği

### 💳 Ödeme Sistemi
- 🚀 **iyzico Entegrasyonu**: HMACSHA256 kimlik doğrulama ile güvenli ödeme işlemleri
- 💳 **Esnek Taksit**: Taksitsiz, 2, 3, 6 ay faizsiz taksit seçenekleri
- 💰 **Dinamik Tutar**: Kullanıcı istediği tutarı belirleyebilir
- 📧 **Email Makbuz**: Ödeme sonrası otomatik email gönderimi

### 🤖 AI Chat Sistemi
- **Gemini 2.0 Flash**: Google'ın en gelişmiş dil modeli
- **Çok Dilli Destek**: Türkçe ve İngilizce destegi
- **Akıllı Müşteri Hizmetleri**: Site bilgileri ile entegre chatbot

### 🎨 Modern Tasarım
- **Responsive**: Mobil ve desktop uyumlu
- **Dark/Light Mode**: Tema değiştirme desteği
- **Motion Animasyonları**: Framer Motion ile smooth geçişler
- **Modern UI**: Tailwind CSS ve Radix UI bileşenleri

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Environment Variables

Proje kök dizininde `.env.local` dosyası oluşturun:

```env
# FAL AI Configuration (AI Görsel Editörü için)
FAL_KEY=your_fal_ai_api_key_here

# Gemini API Key (Chat sistemi için)
GEMINI_API_KEY=your_gemini_api_key_here

# iyzico API Konfigürasyonu
IYZICO_API_KEY=your-api-key-here
IYZICO_SECRET_KEY=your-secret-key-here

# Email Konfigürasyonu (Gmail için)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
COMPANY_EMAIL=company@complysoftware.com

# Next.js Environment Variables
NEXT_PUBLIC_DEFAULT_URL=http://localhost:3000
NEXT_PUBLIC_OG_IMAGE_URL=http://localhost:3000/og-image.png
NEXT_PUBLIC_TWITTER_IMAGE_URL=http://localhost:3000/twitter-image.jpg

# Ortam Seçimi (development/production)
NODE_ENV=development
```

### 3. API Key'leri Alın

#### FAL AI API Key (AI Görsel Editörü için)
1. [FAL AI Dashboard](https://fal.ai/dashboard)'a gidin
2. Hesap oluşturun veya giriş yapın
3. API Key'inizi alın
4. `.env.local` dosyasında `FAL_KEY` olarak ekleyin

#### Gemini API Key (Chat sistemi için)  
1. [Google AI Studio](https://makersuite.google.com/app/apikey)'ya gidin
2. Google hesabınızla giriş yapın
3. API Key oluşturun
4. `.env.local` dosyasında `GEMINI_API_KEY` olarak ekleyin

#### iyzico API Bilgileri (Ödeme sistemi için)
1. [iyzico Geliştirici Portalı](https://docs.iyzico.com/)'na gidin
2. Hesap oluşturun veya giriş yapın
3. API Key ve Secret Key bilgilerinizi alın
4. `.env.local` dosyasına bu bilgileri ekleyin

### 4. Email Konfigürasyonu (Opsiyonel)

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

### 🎨 AI Görsel Editörü

AI Görsel Editörü sayfasına `/image-editor` route'u ile erişebilirsiniz:

```
http://localhost:3000/image-editor
```

**Kullanım Adımları:**
1. Görsel yükleyin (PNG, JPEG, WebP - max 10MB)
2. Düzenleme talimatınızı İngilizce yazın
3. "Görseli Düzenle" butonuna tıklayın
4. AI tarafından düzenlenen görseli indirin

**Örnek Promptlar:**
- "Make the background more colorful"
- "Add sunset lighting to the scene"
- "Change the car color to red"
- "Make the photo look vintage"

### 💳 Ödeme Sayfası

Ödeme sayfasına `/payment` route'u ile erişebilirsiniz:

```
http://localhost:3000/payment
```

### 🤖 AI Chat Sistemi

Ana sayfada bulunan chat widget ile müşteri desteği alabilirsiniz.

### API Endpoints

#### AI Görsel Editörü
- `POST /api/image-editor` - Görsel düzenleme işlemi
- `GET /api/image-editor` - API durumu ve bilgiler

#### Ödeme Sistemi
- `POST /api/payment` - Ödeme işlemi başlatma
- `GET /api/payment` - Taksit bilgilerini getirme

#### Chat Sistemi
- `POST /api/gemini-chat` - AI chat mesajları

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

### Core
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide Icons

### AI Entegrasyonları
- **Görsel Düzenleme**: FAL AI Nano Banana (@fal-ai/client)
- **Chat Sistemi**: Google Gemini 2.0 Flash (@google/generative-ai)
- **Image Processing**: File upload, base64 conversion

### Backend Services
- **Payment**: iyzipay-node, iyzico API
- **Email**: Nodemailer, React Email
- **Validation**: Form validation, Toast notifications

### Development
- **Package Manager**: npm
- **Linting**: ESLint, TypeScript
- **Deployment**: Vercel ready

## Paket Bilgileri

### AI Paketleri
- **@fal-ai/client**: [FAL AI Docs](https://fal.ai/models/fal-ai/nano-banana/edit/api)
- **@google/generative-ai**: [Gemini AI Docs](https://ai.google.dev/)

### Payment Paketleri  
- **iyzipay-node**: [GitHub](https://github.com/iyzico/iyzipay-node)
- **Versiyon**: 2.0.64 (Latest)
- **Lisans**: MIT

## Destek

Herhangi bir sorun yaşarsanız:

### AI Görsel Editörü
1. [FAL AI Dokümantasyonu](https://fal.ai/models/fal-ai/nano-banana/edit/api)'nu inceleyin
2. [FAL AI Discord](https://discord.gg/fal-ai) sunucusuna katılın
3. API Key'in doğru tanımlandığından emin olun

### Chat Sistemi
1. [Gemini AI Dokümantasyonu](https://ai.google.dev/docs)'nu inceleyin
2. [Google AI Studio](https://makersuite.google.com/app/apikey)'da API Key'inizi kontrol edin

### Ödeme Sistemi
1. [iyzico Dokümantasyonu](https://docs.iyzico.com/)'nu inceleyin
2. [iyzipay-node GitHub](https://github.com/iyzico/iyzipay-node) sayfasını ziyaret edin
3. iyzico destek ekibi ile iletişime geçin

### Genel Destek
- GitHub Issues'da sorun bildirin
- Comply Software destek ekibi ile iletişime geçin

## Lisans

MIT License
