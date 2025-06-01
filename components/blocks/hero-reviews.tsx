import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useLanguage } from "@/contexts/language-context";

const testimonialData = {
  tr: [
    {
      quote:
        "Ses tabanlı bir yapay zeka konuşma platformu. Kullanıcılar belirli konuları seçebilir ve seçtikleri senaryoya özel olarak tasarlanmış bir yapay zeka ile sürükleyici, gerçek zamanlı sesli sohbetlere katılmak için farklı roller üstlenebilirler.",
      name: "Syntalkic.",
      designation: "Yapay Zeka Konuşma Platformu",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
    },
    {
      quote:
        "Quest Store, sorunsuz bir alışveriş deneyimi için tasarlanmış çevrimiçi bir e-ticaret platformudur.Gelişmiş bir admin paneli barındırır.",
      name: "Quest Store",
      designation: "e-ticaret platformu",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
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
        "Bu web sitesi, modern ve kullanıcı dostu bir tasarıma sahip, Türkiye'deki bir diş kliniğini tanıtmaktadır. Temiz düzeni ve sezgisel navigasyonu, ziyaretçilerin genel ve kozmetik diş hekimliğinden özel tedavilere kadar sunulan diş hizmetleri yelpazesini kolayca keşfetmelerini sağlar.",
      name: "Diş Hekimi Web Sitesi",
      designation: "Diş Hekimi",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
    },
    {
      quote:
        "Kullanıcıların içerik paylaşabileceği bir sosyal medya platformu.Profil yönetimi fonksiyonları barındırır.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
    },
    {
      quote:
        "Bu web sitesi, Game Center, bir çocuk eğlence merkezi için canlı ve çekici bir çevrimiçi varlık sunmaktadır. Çocukların çeşitli aktivitelerin tadını çıkarırken çekilen belirgin görüntüleri ile renkli ve davetkar bir tasarıma sahiptir.",
      name: "Oyun Merkezi Web Sitesi",
      designation: "Oyun Merkezi",
      url: "https://gamecenter-website.vercel.app/",
      src: "/gamecenter-link.png",
    },
  ],
  en: [
    {
      quote:
        "A voice-based AI conversation platform.Users can select specific topics and take on different roles to engage in immersive, real-time voice chats with an AI tailored to their chosen scenario.",
      name: "Syntalkic.",
      designation: "AI Conversation Platform",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
    },
    {
      quote:
        "Quest Store is an online e-commerce platform designed for a seamless shopping experience.Included advanced admin dashboard.",
      name: "Quest Store",
      designation: "e-commerce platform",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
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
        "This website showcases a dental clinic in Turkey with a modern and user-friendly design. Its clean layout and intuitive navigation make it easy for visitors to explore the range of dental services offered, from general and cosmetic dentistry to specialized treatments",
      name: "Dentist Website",
      designation: "Dentist",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
    },
    {
      quote:
        "A social media platform where users can share content. It includes profile management functionalities.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
    },
    {
      quote:
        "This website, Game Center, presents a vibrant and engaging online presence for a children's entertainment center. It features a colorful and inviting design with prominent images of children enjoying various activities.",
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

  return <AnimatedTestimonials testimonials={testimonialsShow} />;
}

export { AnimatedTestimonialsDemo };
