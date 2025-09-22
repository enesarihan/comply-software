import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useLanguage } from "@/contexts/language-context";

const testimonialData = {
  tr: [
    {
      quote:
        "Güvenli sürüş, sabırlı eğitim ve yüksek başarı oranı — İzmir’in referans kursu.",
      name: "Yeni Karabağlar Sürücü Kursu",
      designation: "Sürücü Kursu Web Sitesi",
      url: "https://www.karabaglarsurucukursu.com/",
      src: "/karabaglar-surucu-kursu.PNG",
    },
    {
      quote:
        "Kullanıcıların senaryo seçerek yapay zeka ile gerçek zamanlı sesli sohbet yapabildiği yenilikçi platform.",
      name: "Syntalkic.",
      designation: "Yapay Zeka Konuşma Platformu",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
    },
    {
      quote:
        "Gelişmiş admin paneli ile donatılmış, sorunsuz alışveriş deneyimi sunan modern e-ticaret platformu.",
      name: "Quest Store",
      designation: "e-ticaret platformu",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
    },
    {
      quote: "Modern ve şık tasarımla evinizi güzelleştiren, yüksek kaliteli mobilyalar sunan e-ticaret platformu. Hayalinizdeki evi yaratın!",
      name: "Comply Furniture",
      designation: "Mobilya E-ticaret Sitesi",
      url: "https://comply-furniture.vercel.app/",
      src: "/comply-furniture.PNG",
      category: "E-commerce",
      technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
      features: ["Product Catalog", "Modern Design", "Quality Furniture", "Easy Shopping"]
    },
    {
      quote:
        "Property Quest, kiracıları mülk sahipleriyle buluşturan kullanıcı dostu bir platformdur.",
      name: "Property Quest",
      designation: "Ev Kiralama Platformu",
      url: "https://property-quest-psi.vercel.app",
      src: "/propertyquest-link.png",
    },
    {
      quote:
        "Modern hukuk bürosu için tasarlanmış, uzmanlık alanları, blog ve randevu sistemi içeren profesyonel web sitesi.",
      name: "Avukat Prototipi",
      designation: "Avukat Websitesi",
      url: "https://lawyer-prototype.vercel.app/",
      src: "/lawyer-link.png",
    },
    {
      quote:
        "Modern tasarım ile genel ve kozmetik diş hekimliği hizmetlerini tanıtan kullanıcı dostu diş kliniği sitesi.",
      name: "Diş Hekimi Web Sitesi",
      designation: "Diş Hekimi",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
    },
    {
      quote:
        "Evcil hayvan sahiplerine güven veren sıcak ve profesyonel atmosferde veteriner hizmetleri sunan modern platform.",
      name: "Veteriner Web Sitesi",
      designation: "Veteriner",
      url: "https://vet-reserve-website.vercel.app/",
      src: "/vet-link.png",
    },
    {
      quote:
        "Profil yönetimi ve içerik paylaşım fonksiyonları ile donatılmış modern sosyal medya platformu.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
    },
    {
      quote:
        "Çocuklar için renkli ve davetkar tasarıma sahip, çeşitli aktiviteleri tanıtan eğlence merkezi web sitesi.",
      name: "Oyun Merkezi Web Sitesi",
      designation: "Oyun Merkezi",
      url: "https://gamecenter-website.vercel.app/",
      src: "/gamecenter-link.png",
    },
  ],
  en: [
    {
      quote:
        "Safe driving, patient training and top success rate — Izmir’s trusted school.",
      name: "Yeni Karabağlar Driving School",
      designation: "Driving School Website",
      url: "https://www.karabaglarsurucukursu.com/",
      src: "/karabaglar-surucu-kursu.PNG",
    },
    {
      quote:
        "Innovative platform enabling users to engage in real-time voice conversations with AI through scenario-based interactions.",
      name: "Syntalkic.",
      designation: "AI Conversation Platform",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
    },
    {
      quote:
        "Modern e-commerce platform featuring advanced admin dashboard for seamless shopping experience.",
      name: "Quest Store",
      designation: "e-commerce platform",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
    },
    {
      quote: "Modern and elegant e-commerce platform offering high-quality furniture to beautify your home. Create your dream home!",
      name: "Comply Furniture",
      designation: "Furniture E-commerce Site",
      url: "https://comply-furniture.vercel.app/",
      src: "/comply-furniture.PNG",
      category: "E-commerce",
      technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
      features: ["Product Catalog", "Modern Design", "Quality Furniture", "Easy Shopping"]
    },
    {
      quote:
        "Property Quest is a user-friendly platform that connects renters with property owners.",
      name: "Property Quest",
      designation: "House Rental Platform",
      url: "https://property-quest-psi.vercel.app",
      src: "/propertyquest-link.png",
    },
    {
      quote:
        "Professional law firm website featuring expertise areas, blog content, and appointment booking system.",
      name: "Lawyer Prototype",
      designation: "Lawyer Website",
      url: "https://lawyer-prototype.vercel.app/",
      src: "/lawyer-link.png",
    },
    {
      quote:
        "Modern dental clinic website featuring general and cosmetic dentistry services with user-friendly design.",
      name: "Dentist Website",
      designation: "Dentist",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
    },
    {
      quote:
        "Modern veterinary platform creating trust with pet owners through warm, professional design and user-friendly experience.",
      name: "Vet Web Site",
      designation: "Vet",
      url: "https://vet-reserve-website.vercel.app/",
      src: "/vet-link.png",
    },
    {
      quote:
        "Modern social media platform with content sharing and profile management functionalities.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
    },
    {
      quote:
        "Vibrant children's entertainment center website featuring colorful design and engaging activity showcases.",
      name: "Game Center Website",
      designation: "Game Center",
      url: "https://gamecenter-website.vercel.app/",
      src: "/gamecenter-link.png",
    },
  ],
};

function AnimatedTestimonialsDemo() {
  const { language } = useLanguage();
  const testimonialsShow = testimonialData[language];

  return <AnimatedTestimonials testimonials={testimonialsShow} autoplay />;
}

export { AnimatedTestimonialsDemo };
