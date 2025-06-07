// contexts/translations.ts (GÜNCELLENMİŞ VERSİYON)

export type Language = "en" | "tr";

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
        "Streamline your compliance processes with cutting-edge software solutions designed for modern businesses",
      getStarted: "Get Started",
      learnMore: "Let Us Call You",
      screenTitle: "Our Masterpieces!",
      screenSubTitle: "(You can click to the image and go to project.)",
    },
    about: {
      title: "About Comply Software",
      subtitle:
        "We're dedicated to revolutionizing compliance management through innovative technology and user-centric design",
      features: {
        secure: {
          title: "Secure & Reliable",
          description:
            "Enterprise-grade security with 99.9% uptime guarantee to keep your compliance data safe and accessible",
        },
        expert: {
          title: "Expert Team",
          description:
            "Our team of compliance experts and software engineers work together to deliver exceptional solutions",
        },
        innovation: {
          title: "Innovation First",
          description:
            "Cutting-edge technology and continuous innovation to stay ahead of compliance requirements",
        },
      },
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle:
        "Select the most suitable software solution for your business needs",
      mostPopular: "🔥 Best Seller",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      plans: {
        basic: {
          name: "Basic",
          description:
            "A perfect starting point for individual users and simple projects.",
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
          features: [
            "All features from the Professional plan",
            "Advanced Admin Panel (content management)",
            "Payment integration with Stripe",
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
        "Ready to transform your compliance processes? Let's discuss how we can help your business",
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
          value: "Izmir,Turkey",
        },
      },
      form: {
        title: "Send us a message",
        subtitle: "We'll get back to you within 24 hours",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        company: "Company (optional)",
        companyPlaceholder: "Your Company",
        phone: "Contact Number",
        message: "Message",
        messagePlaceholder: "Tell us about your compliance needs...",
        send: "Send Message",
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
      stripe: "Secure and flexible payment infrastructure",
      supabase: "Open source Firebase alternative",
      firebase: "Realtime backend and hosting platform",
      details: {
        next: "Next.js offers excellent SEO and performance with SSR and static site generation.",
        react:
          "React’s component architecture enables scalable and maintainable apps.",
        tailwind:
          "Tailwind CSS is perfect for building responsive and customizable UIs.",
        stripe:
          "Stripe simplifies global payments with robust and secure APIs.",
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
  },
  tr: {
    nav: {
      home: "Ana sayfa",
      about: "Hakkında",
      pricing: "Ücretler",
      contact: "İletişim",
      faq: "SSS", // Bu artık sadece bir başlık veya genel kelime
      getStarted: "Sizi Arayalım!",
      banner: "Kısa süreliğine dev indirimler! 🔥🔥",
    },
    hero: {
      title: [
        "Yazılım Çözümleri",
        "Responsive Tasarım",
        "Ücret ",
        "SEO Optimizasyonu",
        "Vizyon",
        "Son Teknolojiler",
        "Modern Tasarım",
      ],
      mainTitle: "Sizin için en iyi 🎯 ",
      subtitle:
        "Modern işletmeler için tasarlanmış son teknoloji yazılım çözümleriyle uyumluluk süreçlerinizi kolaylaştırın",
      getStarted: "Başlayın",
      learnMore: "Sizi Arayalım",
      screenTitle: "Eserler!",
      screenSubTitle: "(Resime tıklayıp projeye gidebilirsiniz.)",
    },
    about: {
      title: "Comply Software Hakkında",
      subtitle:
        "Yenilikçi teknoloji ve kullanıcı odaklı tasarım ile uyumluluk yönetiminde devrim yaratmaya kendimizi adadık",
      features: {
        secure: {
          title: "Güvenli ve Güvenilir",
          description:
            "Uyumluluk verilerinizi güvenli ve erişilebilir tutmak için %99.9 çalışma süresi garantisi ile kurumsal düzeyde güvenlik",
        },
        expert: {
          title: "Uzman Ekip",
          description:
            "Uyumluluk uzmanları ve yazılım mühendislerinden oluşan ekibimiz olağanüstü çözümler sunmak için birlikte çalışır",
        },
        innovation: {
          title: "Önce İnovasyon",
          description:
            "Uyumluluk gereksinimlerinin önünde kalmak için son teknoloji ve sürekli inovasyon",
        },
      },
    },
    pricing: {
      title: "Planınızı Seçin",
      subtitle: "İş ihtiyaçlarınıza en uygun yazılım çözümünü seçin",
      mostPopular: "🔥 Çok Satan",
      getStarted: "Başlayın",
      contactSales: "Satış ile İletişime Geçin",
      plans: {
        basic: {
          name: "Temel",
          description:
            "Bireysel kullanıcılar ve basit projeler için mükemmel başlangıç noktası.",
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
          features: [
            "Profesyonel plandaki tüm özellikler",
            "Güçlü Admin Paneli (İçerik yönetimi)",
            "Stripe entegrasyonu ile ödeme altyapısı",
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
        "Uyumluluk süreçlerinizi dönüştürmeye hazır mısınız? İşinize nasıl yardımcı olabileceğimizi konuşalım",
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
          value: "İzmir,Türkiye",
        },
      },
      form: {
        title: "Bize mesaj gönderin",
        subtitle: "24 saat içinde size geri döneceğiz",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        company: "Şirket (isteğe bağlı)",
        companyPlaceholder: "Şirketiniz",
        phone: "İletişim Numarası",
        message: "Mesaj",
        messagePlaceholder: "Uyumluluk ihtiyaçlarınız hakkında bize anlatın...",
        send: "Mesaj Gönder",
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
      stripe: "Güvenli ve esnek ödeme altyapısı",
      supabase: "Açık kaynaklı Firebase alternatifi",
      firebase: "Gerçek zamanlı backend ve barındırma",
      details: {
        next: "Next.js, SSR ve statik site üretimi ile mükemmel SEO ve performans sunar.",
        react:
          "React bileşen yapısı ile sürdürülebilir ve ölçeklenebilir projeler oluşturur.",
        tailwind:
          "Tailwind CSS, esnek ve özelleştirilebilir UI'lar inşa etmek için idealdir.",
        stripe:
          "Stripe, dünya genelinde ödeme almanızı kolaylaştırır ve güvenli hale getirir.",
        supabase:
          "Supabase ile veritabanı, auth ve storage işlemleri zahmetsizce halledilir.",
        firebase:
          "Firebase, push bildirimden hosting’e kadar eksiksiz bir çözüm sunar.",
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
  },
};
