// contexts/translations.ts (PERFORMANS OPTİMİZE EDİLMİŞ VERSİYON)

export type Language = "en" | "tr";

// Lazy loading için translation chunk'ları ayırdık
const getTranslations = (lang: Language) => {
  return translations[lang];
};

// Memoization için translations cache
const translationsCache = new Map<Language, any>();

export const getTranslation = (lang: Language) => {
  if (translationsCache.has(lang)) {
    return translationsCache.get(lang);
  }
  const translation = getTranslations(lang);
  translationsCache.set(lang, translation);
  return translation;
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
      faq: "FAQ",
      getStarted: "Let Us Call You!",
      banner: "Huge discounts for a limited time! 🔥🔥",
    },
    hero: {
      title: [
        "Software Solutions",
        "Responsive Design",
        "Best Price",
        "SEO Optimization",
        "Vision",
        "Cutting-edge technology",
        "Modern Design",
      ],
      mainTitle: `We're building 🎯  `,
      subtitle:
        "Streamline your compliance processes with cutting-edge software solutions designed for modern businesses.",
      getStarted: "Get Started",
      learnMore: "Let Us Call You",
      screenTitle: "Our Masterpieces!",
      screenSubTitle: "(You can click to the image and go to project.)",
    },
    about: {
      title: "About Comply Software",
      subtitle:
        "We're dedicated to revolutionizing compliance management through innovative technology and user-centric design.",
      features: {
        secure: {
          title: "Secure & Reliable",
          description:
            "Enterprise-grade security with 99.9% uptime guarantee to keep your compliance data safe and accessible.",
        },
        expert: {
          title: "Expert Team",
          description:
            "Our team of compliance experts and software engineers work together to deliver exceptional solutions.",
        },
        innovation: {
          title: "Innovation First",
          description:
            "Cutting-edge technology and continuous innovation to stay ahead of compliance requirements.",
        },
        seo: {
          title: "SEO Optimization",
          description:
            "Boost your online visibility and attract more customers with advanced SEO strategies built into every website.",
        },
        performance: {
          title: "Lightning Fast Performance",
          description:
            "Enjoy blazing fast load times and smooth user experience, optimized for all devices and search engines.",
        },
        support: {
          title: "24/7 Support",
          description:
            "Get round-the-clock technical support and guidance whenever you need it, so your business never stops.",
        },
        customization: {
          title: "Customizable Solutions",
          description:
            "Tailor your website to your unique business needs with flexible and scalable design options.",
        },
        mobile: {
          title: "Mobile Friendly",
          description:
            "Your website will look and work perfectly on all devices, ensuring a seamless experience for every visitor.",
        },
        analytics: {
          title: "Analytics & Insights",
          description:
            "Track your website's performance and user behavior with integrated analytics for data-driven business growth.",
        },
      },
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle:
        "Select the most suitable software solution for your business needs.",
      mostPopular: "🔥 Best Seller",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      plans: {
        basic: {
          name: "Basic",
          description:
            "A perfect starting point for individual users and simple projects.",
          price: "18.999 TL",
          features: [
            "Single-page modern website",
            "Fully responsive design for all devices",
            "Detailed contact form",
            "Fast delivery time",
          ],
        },
        professional: {
          name: "Professional",
          description:
            "A powerful and comprehensive solution for small and medium-sized businesses.",
          price: "31.999 TL",
          features: [
            "Multi-page dynamic website structure",
            "Advanced SEO optimization",
            "Modern responsive design",
            "Priority technical support",
            "1 year of free hosting and domain",
            "1 year of technical support service",
            "Strategic structure to increase customer potential",
            "Form and data collection infrastructure",
          ],
        },
        elite: {
          name: "Elite",
          description:
            "A complete package tailored for corporate companies and large-scale projects.",
          price: "189.999 TL",
          features: [
            "All features from the Professional plan",
            "Advanced Admin Panel (content management)",
            "Workflow automation with n8n",
            "Fully-featured e-commerce infrastructure",
            "2 years of free hosting and domain",
            "2 years of priority technical support",
            "Scalable architecture and integrations",
            "Customizable user interface",
            "Advanced security features",
          ],
        },
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to transform your compliance processes? Let's discuss how we can help your business.",
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "complysoftware@gmail.com",
        },
        phone: {
          label: "Phone",
          value: "+90 (552) 584-5941",
        },
        address: {
          label: "Address",
          value: "Izmir, Turkey",
        },
      },
      form: {
        title: "Send us a message",
        subtitle: "We'll get back to you within 24 hours.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        company: "Company (optional)",
        companyPlaceholder: "Your Company",
        phone: "Contact Number",
        message: "Message",
        messagePlaceholder: "Tell us about your compliance needs...",
        send: "Send Message",
        success: "Your message has been sent successfully!",
        errors: {
          formInvalid: "Please fix the errors in the form.",
          firstNameRequired: "First name is required.",
          firstNameMinLength: "First name must be at least 2 characters.",
          lastNameRequired: "Last name is required.",
          lastNameMinLength: "Last name must be at least 2 characters.",
          emailRequired: "Email is required.",
          emailInvalid: "Please enter a valid email address.",
          phoneRequired: "Phone number is required.",
          phoneInvalid: "Please enter a valid phone number.",
          messageRequired: "Message is required.",
          messageMinLength: "Message must be at least 10 characters.",
          submitError: "An error occurred while sending the message.",
          networkError: "Network error. Please try again.",
        },
      },
    },
    footer: {
      copyright: "© 2025 Comply Software. All Rights Reserved.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      email: "Email",
      phone: "Phone",
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "Modern and reliable solutions",
      description:
        "We utilize the following powerful technologies in our projects.",
      more: "More coming soon...",
      next: "A full-featured framework built on React",
      react: "A powerful library for building user interfaces",
      tailwind: "Utility-first CSS framework for fast UI development",
      n8n: "Powerful workflow automation platform",
      supabase: "Open source Firebase alternative",
      firebase: "Realtime backend and hosting platform",
      details: {
        next: "Next.js offers excellent SEO and performance with SSR and static site generation.",
        react:
          "React's component architecture enables scalable and maintainable apps.",
        tailwind:
          "Tailwind CSS is perfect for building responsive and customizable UIs.",
        n8n: "n8n enables seamless workflow automation and integration with hundreds of services.",
        supabase: "Supabase handles database, auth, and storage effortlessly.",
        firebase:
          "Firebase delivers a full backend suite from hosting to push notifications.",
      },
    },
    // GÜNCELLENEN FAQ BÖLÜMÜ
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How long does it take to build a website?",
          answer:
            "The duration varies based on the project's complexity. A basic single-page website can be ready in 1-2 weeks, while larger, more complex projects might take 4-8 weeks or more. We provide a detailed timeline after understanding your needs.",
        },
        {
          question: "Do you offer post-launch support?",
          answer:
            "Yes, we offer various support packages, including technical assistance, updates, and maintenance. Our Professional and Elite plans include 1-2 years of free technical support.",
        },
        {
          question: "Can I manage the content of my website myself?",
          answer:
            "Absolutely! Our Elite plan includes a powerful Admin Panel that allows you to easily manage and update your website's content without any coding knowledge.",
        },
        {
          question: "Is my website mobile-friendly?",
          answer:
            "All websites we develop are designed with a fully responsive approach, ensuring they look and function perfectly on desktops, tablets, and mobile phones.",
        },
        {
          question: "What is the cost of a website?",
          answer:
            "Website costs vary depending on features, design, and complexity. We offer transparent pricing with Basic, Professional, and Elite plans. Please review our 'Pricing' section for detailed information or contact us for a custom quote.",
        },
      ],
    },
    chat: {
      botName: "Comply Bot",
      welcome: "Hello! I'm Comply Bot. How can I help you?",
      inputPlaceholder: "Type your question...",
      send: "Send",
      contactCta: "Open the contact form for more information",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for your business",
      description:
        "We offer a wide range of digital services to help your business grow and succeed in the digital world.",
      cta: {
        title: "Ready to bring your project to life?",
        description:
          "Let's craft your digital success story together with our expert team. Contact us now for a free consultation.",
        button: "Free Consultation",
      },
      items: {
        webDesign: {
          title: "Custom Web Design",
          description:
            "Modern, responsive websites tailored to your brand and business needs. We create stunning designs that convert visitors into customers.",
          features: [
            "Responsive design for all devices",
            "Modern UI/UX design",
            "SEO optimized structure",
            "Fast loading times",
            "Custom animations and interactions",
            "Content management system",
            "Analytics integration",
            "24/7 technical support",
          ],
          icon: "🎨",
        },
        ecommerce: {
          title: "E-commerce Solutions",
          description:
            "Complete online store solutions with payment processing, inventory management, and customer relationship tools.",
          features: [
            "Secure payment processing",
            "Inventory management system",
            "Order tracking and notifications",
            "Customer account management",
            "Product catalog management",
            "Shipping and tax calculations",
            "Marketing and promotion tools",
            "Sales analytics and reporting",
          ],
          icon: "🛒",
        },
        googleAds: {
          title: "Google Ads Management",
          description:
            "Professional Google Ads campaign management to increase your online visibility and drive targeted traffic to your website.",
          features: [
            "Campaign strategy development",
            "Keyword research and optimization",
            "Ad copy creation and testing",
            "Budget management and optimization",
            "Performance monitoring and reporting",
            "A/B testing for better results",
            "Competitor analysis",
            "ROI optimization",
          ],
          icon: "📈",
        },
        seo: {
          title: "SEO Optimization",
          description:
            "Search engine optimization services to improve your website's visibility and rank higher in search results.",
          features: [
            "Technical SEO audit",
            "On-page optimization",
            "Content strategy development",
            "Link building campaigns",
            "Local SEO optimization",
            "Performance monitoring",
            "Competitor analysis",
            "Monthly progress reports",
          ],
          icon: "🔍",
        },
        maintenance: {
          title: "Website Maintenance",
          description:
            "Ongoing website maintenance and support to keep your site secure, updated, and performing at its best.",
          features: [
            "Regular security updates",
            "Performance optimization",
            "Content updates and management",
            "Backup and recovery",
            "Technical support",
            "Analytics monitoring",
            "Mobile compatibility checks",
            "Speed optimization",
          ],
          icon: "🔧",
        },
        renewal: {
          title: "Website Renewal",
          description:
            "Transform your existing website with modern design updates, improved functionality, and enhanced user experience.",
          features: [
            "Modern design refresh",
            "Improved user interface",
            "Enhanced functionality",
            "Mobile responsiveness upgrade",
            "Performance optimization",
            "SEO improvements",
            "Content restructuring",
            "New features integration",
          ],
          icon: "🔄",
        },
      },
    },
    founders: {
      founder1: {
        name: "Enes",
        surname: "SARIHAN",
        title: "Co-Founder",
        description: "Co-Founder of Comply Software",
      },
      founder2: {
        name: "Orhan Aypars",
        surname: "ÇELİK",
        title: "Co-Founder",
        description: "Co-Founder of Comply Software",
      },
    },
  },
  tr: {
    nav: {
      home: "Ana sayfa",
      about: "Hakkında",
      pricing: "Ücretler",
      contact: "İletişim",
      faq: "SSS",
      getStarted: "Sizi Arayalım!",
      banner: "Kısa süreliğine dev indirimler! 🔥🔥",
    },
    hero: {
      title: [
        "Yazılım Çözümleri",
        "Responsive Tasarım",
        "En İyi Fiyat",
        "SEO Optimizasyonu",
        "Vizyon",
        "Son Teknolojiler",
        "Modern Tasarım",
      ],
      mainTitle: "Sizin için en iyi 🎯 ",
      subtitle:
        "Modern işletmeler için tasarlanmış son teknoloji yazılım çözümleriyle uyumluluk süreçlerinizi kolaylaştırın.",
      getStarted: "Başlayın",
      learnMore: "Sizi Arayalım",
      screenTitle: "Eserlerimiz!",
      screenSubTitle: "(Resme tıklayıp projeye gidebilirsiniz.)",
    },
    about: {
      title: "Comply Software Hakkında",
      subtitle:
        "Yenilikçi teknoloji ve kullanıcı odaklı tasarım ile uyumluluk yönetiminde devrim yaratmaya kendimizi adadık.",
      features: {
        secure: {
          title: "Güvenli ve Güvenilir",
          description:
            "Uyumluluk verilerinizi güvenli ve erişilebilir tutmak için %99.9 çalışma süresi garantisi ile kurumsal düzeyde güvenlik.",
        },
        expert: {
          title: "Uzman Ekip",
          description:
            "Uyumluluk uzmanları ve yazılım mühendislerinden oluşan ekibimiz olağanüstü çözümler sunmak için birlikte çalışır.",
        },
        innovation: {
          title: "Önce İnovasyon",
          description:
            "Uyumluluk gereksinimlerinin önünde kalmak için son teknoloji ve sürekli inovasyon.",
        },
        seo: {
          title: "SEO Optimizasyonu",
          description:
            "Her web sitesine entegre gelişmiş SEO stratejileriyle dijital görünürlüğünüzü artırın, daha fazla müşteri çekin.",
        },
        performance: {
          title: "Yıldırım Hızında Performans",
          description:
            "Tüm cihazlar ve arama motorları için optimize edilmiş, ışık hızında yüklenen ve akıcı kullanıcı deneyimi sunan siteler.",
        },
        support: {
          title: "7/24 Destek",
          description:
            "İşiniz hiç durmasın diye ihtiyaç duyduğunuz her an teknik destek ve rehberlik yanınızda.",
        },
        customization: {
          title: "Özelleştirilebilir Çözümler",
          description:
            "İşletmenizin özel ihtiyaçlarına göre esnek ve ölçeklenebilir web tasarım seçenekleriyle fark yaratın.",
        },
        mobile: {
          title: "Mobil Uyumlu",
          description:
            "Web siteniz tüm cihazlarda kusursuz görünecek ve çalışacak, her ziyaretçiye sorunsuz bir deneyim sunacak.",
        },
        analytics: {
          title: "Analitik & İçgörü",
          description:
            "Entegre analizlerle web sitenizin performansını ve kullanıcı davranışlarını takip edin, veriye dayalı büyüyün.",
        },
      },
    },
    pricing: {
      title: "Planınızı Seçin",
      subtitle: "İş ihtiyaçlarınıza en uygun yazılım çözümünü seçin.",
      mostPopular: "🔥 Çok Satan",
      getStarted: "Başlayın",
      contactSales: "Satış ile İletişime Geçin",
      plans: {
        basic: {
          name: "Temel",
          description:
            "Bireysel kullanıcılar ve basit projeler için mükemmel başlangıç noktası.",
          price: "18.999 TL",
          features: [
            "Tek sayfalık modern web sitesi",
            "Mobil ve tüm cihazlarla uyumlu tasarım (Full Responsive)",
            "Detaylı iletişim formu",
            "Hızlı teslim süresi",
          ],
        },
        professional: {
          name: "Profesyonel",
          description:
            "Küçük ve orta ölçekli işletmeler için güçlü ve kapsamlı bir çözüm.",
          price: "31.999 TL",
          features: [
            "Çok sayfalı dinamik site yapısı",
            "Gelişmiş SEO optimizasyonu",
            "Mobil uyumlu (responsive) modern tasarım",
            "Öncelikli teknik destek",
            "1 Yıl ücretsiz hosting ve alan adı (domain)",
            "1 Yıl teknik destek hizmeti",
            "Müşteri potansiyeli artırmaya yönelik stratejik yapı",
            "Form ve veri toplama altyapısı",
          ],
        },
        elite: {
          name: "Elite",
          description:
            "Kurumsal firmalar ve büyük ölçekli projeler için eksiksiz çözüm paketi.",
          price: "189.999 TL",
          features: [
            "Profesyonel plandaki tüm özellikler",
            "Güçlü Admin Paneli (İçerik yönetimi)",
            "n8n ile iş akışı otomasyonu",
            "Tam özellikli e-ticaret altyapısı",
            "2 Yıl ücretsiz hosting + alan adı",
            "2 Yıl öncelikli teknik destek",
            "Ölçeklenebilir yapı ve entegrasyonlar",
            "Özelleştirilebilir kullanıcı arayüzü",
            "Gelişmiş güvenlik önlemleri",
          ],
        },
      },
    },
    contact: {
      title: "İletişime Geçin",
      subtitle:
        "Uyumluluk süreçlerinizi dönüştürmeye hazır mısınız? İşinize nasıl yardımcı olabileceğimizi konuşalım.",
      info: {
        title: "İletişim Bilgileri",
        email: {
          label: "E-posta",
          value: "complysoftware@gmail.com",
        },
        phone: {
          label: "Telefon",
          value: "+90 (552) 584-5941",
        },
        address: {
          label: "Adres",
          value: "İzmir, Türkiye",
        },
      },
      form: {
        title: "Bize mesaj gönderin",
        subtitle: "24 saat içinde size geri döneceğiz.",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        company: "Şirket (isteğe bağlı)",
        companyPlaceholder: "Şirketiniz",
        phone: "İletişim Numarası",
        message: "Mesaj",
        messagePlaceholder: "Uyumluluk ihtiyaçlarınız hakkında bize anlatın...",
        send: "Mesaj Gönder",
        success: "Mesajınız başarıyla gönderildi!",
        errors: {
          formInvalid: "Lütfen formdaki hataları düzeltin.",
          firstNameRequired: "Ad alanı zorunludur.",
          firstNameMinLength: "Ad en az 2 karakter olmalıdır.",
          lastNameRequired: "Soyad alanı zorunludur.",
          lastNameMinLength: "Soyad en az 2 karakter olmalıdır.",
          emailRequired: "E-posta alanı zorunludur.",
          emailInvalid: "Lütfen geçerli bir e-posta adresi girin.",
          phoneRequired: "Telefon numarası zorunludur.",
          phoneInvalid: "Lütfen geçerli bir telefon numarası girin.",
          messageRequired: "Mesaj alanı zorunludur.",
          messageMinLength: "Mesaj en az 10 karakter olmalıdır.",
          submitError: "Mesaj gönderilirken bir hata oluştu.",
          networkError: "Ağ hatası. Lütfen tekrar deneyin.",
        },
      },
    },
    footer: {
      copyright: "© 2025 Comply Software. Tüm Hakları Saklıdır.",
      quickLinks: "Hızlı Linkler",
      contactUs: "Bize Ulaşın",
      email: "E-posta",
      phone: "Telefon",
    },
    technologies: {
      title: "Kullandığımız Teknolojiler",
      subtitle: "Modern ve güvenilir çözümler",
      description: "Projelerimizde aşağıdaki güçlü teknolojileri kullanıyoruz.",
      more: "Daha fazlası yakında...",
      next: "React tabanlı tam özellikli framework",
      react: "Kullanıcı arayüzleri için güçlü bir kütüphane",
      tailwind: "Hızlı UI geliştirme için utility-first CSS",
      n8n: "Güçlü iş akışı otomasyon platformu",
      supabase: "Açık kaynaklı Firebase alternatifi",
      firebase: "Gerçek zamanlı backend ve barındırma",
      details: {
        next: "Next.js, SSR ve statik site üretimi ile mükemmel SEO ve performans sunar.",
        react:
          "React bileşen yapısı ile sürdürülebilir ve ölçeklenebilir projeler oluşturur.",
        tailwind:
          "Tailwind CSS, esnek ve özelleştirilebilir UI'lar inşa etmek için idealdir.",
        n8n: "n8n, yüzlerce servis ile kolayca entegre olmanızı ve iş akışlarınızı otomatikleştirmenizi sağlar.",
        supabase:
          "Supabase ile veritabanı, auth ve storage işlemleri zahmetsizce halledilir.",
        firebase:
          "Firebase, push bildirimden hosting'e kadar eksiksiz bir çözüm sunar.",
      },
    },
    // GÜNCELLENEN FAQ BÖLÜMÜ
    faq: {
      title: "Sıkça Sorulan Sorular",
      questions: [
        {
          question: "Web sitesi yapımı ne kadar sürer?",
          answer:
            "Süre, projenin karmaşıklığına göre değişir. Temel tek sayfalık bir web sitesi 1-2 haftada hazır olabilirken, daha büyük ve karmaşık projeler 4-8 hafta veya daha uzun sürebilir. İhtiyaçlarınızı anladıktan sonra detaylı bir zaman çizelgesi sunarız.",
        },
        {
          question:
            "Web sitesi yayına alındıktan sonra destek sağlıyor musunuz?",
          answer:
            "Evet, teknik yardım, güncellemeler ve bakım dahil olmak üzere çeşitli destek paketleri sunuyoruz. Profesyonel ve Elite planlarımız 1-2 yıl ücretsiz teknik destek içerir.",
        },
        {
          question: "Web sitemin içeriğini kendim yönetebilir miyim?",
          answer:
            "Kesinlikle! Elite planımız, web sitenizin içeriğini hiçbir kodlama bilgisine ihtiyaç duymadan kolayca yönetmenizi ve güncellemenizi sağlayan güçlü bir Yönetici Paneli içerir.",
        },
        {
          question: "Web sitem mobil uyumlu mu?",
          answer:
            "Geliştirdiğimiz tüm web siteleri tamamen duyarlı bir yaklaşımla tasarlanır ve masaüstü, tablet ve cep telefonlarında mükemmel görünmesini ve işlevselliğini sağlar.",
        },
        {
          question: "Bir web sitesinin maliyeti nedir?",
          answer:
            "Web sitesi maliyetleri özelliklere, tasarıma ve karmaşıklığa göre değişir. Temel, Profesyonel ve Elite planlarımızla şeffaf fiyatlandırma sunuyoruz. Detaylı bilgi için lütfen 'Ücretler' bölümümüzü inceleyin veya özel bir teklif için bizimle iletişime geçin.",
        },
      ],
    },
    chat: {
      botName: "Comply Bot",
      welcome: "Merhaba! Ben Comply Bot. Size nasıl yardımcı olabilirim?",
      inputPlaceholder: "Sorunuzu yazın...",
      send: "Gönder",
      contactCta: "Daha fazla bilgi almak için iletişim formunu aç",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "İşiniz için kapsamlı dijital çözümler",
      description:
        "İşinizi dijital dünyada büyütmek ve başarıya ulaşmak için çeşitli dijital hizmetler sunuyoruz.",
      cta: {
        title: "Projenizi Hayata Geçirmeye Hazır mısınız?",
        description:
          "Uzman ekibimizle birlikte dijital başarı hikayenizi yazalım. Ücretsiz danışmanlık için hemen iletişime geçin.",
        button: "Ücretsiz Danışmanlık",
      },
      items: {
        webDesign: {
          title: "Özel Web Tasarımı",
          description:
            "Markanız ve işletmeniz ihtiyaçlarına uygun, modern, duyarlı web siteleri oluşturuyoruz. Ziyaretçileri müşterilere dönüştüren şık tasarımlar yaratıyoruz.",
          features: [
            "Tüm cihazlarda duyarlı tasarım",
            "Modern UI/UX tasarım",
            "SEO optimizasyonlu yapı",
            "Hızlı yükleme süreleri",
            "Özelleştirilebilir animasyonlar ve etkileşimler",
            "İçerik yönetim sistemi",
            "Analitik entegrasyonu",
            "24/7 teknik destek",
          ],
          icon: "🎨",
        },
        ecommerce: {
          title: "E-Ticaret Çözümleri",
          description:
            "Ödeme işleme, envanter yönetimi ve müşteri ilişkileri aracılığıyla tamamlanmış e-ticaret çözümleri sunuyoruz.",
          features: [
            "Güvenli ödeme işleme",
            "Envanter yönetim sistemi",
            "Sipariş takibi ve bildirimler",
            "Müşteri hesap yönetimi",
            "Ürün kataloğu yönetimi",
            "Kargo ve vergi hesaplamaları",
            "Pazarlama ve promosyon araçları",
            "Satış analitikleri ve raporlama",
          ],
          icon: "🛒",
        },
        googleAds: {
          title: "Google Ads Yönetimi",
          description:
            "Google Ads kampanyanızın online görünürlüğünü artırarak web sitenize hedeflenmiş trafiği sürüyoruz.",
          features: [
            "Kampanya stratejisi geliştirme",
            "Anahtar kelime araştırma ve optimizasyon",
            "Reklam kopyası oluşturma ve test etme",
            "Bütçe yönetimi ve optimizasyonu",
            "Performans izleme ve raporlama",
            "Daha iyi sonuçlar için A/B testi",
            "Rekabetçi analiz",
            "ROI optimizasyonu",
          ],
          icon: "📈",
        },
        seo: {
          title: "SEO Optimizasyonu",
          description:
            "Arama motorlarında web sitenizin görünürlüğünü ve sonuçlarınızı daha yüksek sıralamaya çıkarın.",
          features: [
            "Teknik SEO audit",
            "On-page optimizasyonu",
            "İçerik stratejisi geliştirme",
            "Link kurma kampanyaları",
            "Yerel SEO optimizasyonu",
            "Performans izleme",
            "Rekabetçi analiz",
            "Aylık ilerleme raporları",
          ],
          icon: "🔍",
        },
        maintenance: {
          title: "Web Sitesi Bakımı",
          description:
            "Sitenizin güvenli, güncel ve en iyi performansla çalışmasını sağlamak için devam eden web sitesi bakımı ve destek.",
          features: [
            "Düzenli güvenlik güncellemeleri",
            "Performans optimizasyonu",
            "İçerik güncellemeleri ve yönetimi",
            "Yedekleme ve kurtarma",
            "Teknik destek",
            "Analitik izleme",
            "Mobil uyumluluk kontrolleri",
            "Hız optimizasyonu",
          ],
          icon: "🔧",
        },
        renewal: {
          title: "Web Sitesi Yenileme",
          description:
            "Mevcut web sitenizi modern tasarım güncellemeleri, işlevsellik iyileştirmeleri ve kullanıcı deneyimini geliştirmek için yenileyin.",
          features: [
            "Modern tasarım yenileme",
            "İyileştirilmiş kullanıcı arayüzü",
            "Gelişmiş işlevsellik",
            "Mobil uyumluluk yükseltme",
            "Performans optimizasyonu",
            "SEO iyileştirmeleri",
            "İçerik yeniden yapılandırma",
            "Yeni özellikler entegrasyonu",
          ],
          icon: "🔄",
        },
      },
    },
    founders: {
      founder1: {
        name: "Enes",
        surname: "SARIHAN",
        title: "Co-Founder",
        description: "Co-Founder of Comply Software",
      },
      founder2: {
        name: "Orhan Aypars",
        surname: "ÇELİK",
        title: "Co-Founder",
        description: "Co-Founder of Comply Software",
      },
    },
  },
};
