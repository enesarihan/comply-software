"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/screens/Navbar";

// Testimonial data'yı import et
const testimonialData = {
  tr: [
    {
      quote: "Kullanıcıların senaryo seçerek yapay zeka ile gerçek zamanlı sesli sohbet yapabildiği yenilikçi platform.",
      name: "Syntalkic.",
      designation: "Yapay Zeka Konuşma Platformu",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
      category: "AI Platform",
      technologies: ["Next.js", "React", "AI Integration", "WebRTC"],
      features: ["Real-time AI Chat", "Voice Recognition", "Scenario-based Interactions", "Modern UI/UX"]
    },
    {
      quote: "Gelişmiş admin paneli ile donatılmış, sorunsuz alışveriş deneyimi sunan modern e-ticaret platformu.",
      name: "Quest Store",
      designation: "e-ticaret platformu",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
      category: "E-commerce",
      technologies: ["Next.js", "React", "Stripe", "Admin Panel"],
      features: ["Product Catalog", "Payment Processing", "Admin Dashboard", "User Management"]
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
      quote: "Property Quest, kiracıları mülk sahipleriyle buluşturan kullanıcı dostu bir platformdur.",
      name: "Property Quest",
      designation: "Ev Kiralama Platformu",
      url: "https://property-quest-psi.vercel.app",
      src: "/propertyquest-link.png",
      category: "Real Estate",
      technologies: ["Next.js", "React", "MongoDB", "Map Integration"],
      features: ["Property Listings", "Search & Filter", "User Profiles", "Booking System"]
    },
    {
      quote: "Modern hukuk bürosu için tasarlanmış, uzmanlık alanları, blog ve randevu sistemi içeren profesyonel web sitesi.",
      name: "Avukat Prototipi",
      designation: "Avukat Websitesi",
      url: "https://lawyer-prototype.vercel.app/",
      src: "/lawyer-link.png",
      category: "Professional Services",
      technologies: ["Next.js", "React", "Tailwind CSS", "Appointment System"],
      features: ["Expertise Areas", "Blog System", "Appointment Booking", "Contact Forms"]
    },
    {
      quote: "Modern tasarım ile genel ve kozmetik diş hekimliği hizmetlerini tanıtan kullanıcı dostu diş kliniği sitesi.",
      name: "Diş Hekimi Web Sitesi",
      designation: "Diş Hekimi",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
      category: "Healthcare",
      technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      features: ["Service Showcase", "Appointment Booking", "Modern Design", "Mobile Responsive"]
    },
    {
      quote: "Evcil hayvan sahiplerine güven veren sıcak ve profesyonel atmosferde veteriner hizmetleri sunan modern platform.",
      name: "Veteriner Web Sitesi",
      designation: "Veteriner",
      url: "https://vet-reserve-website.vercel.app/",
      src: "/vet-link.png",
      category: "Healthcare",
      technologies: ["Next.js", "React", "Tailwind CSS", "Booking System"],
      features: ["Service Information", "Appointment Booking", "Pet Care Tips", "Professional Design"]
    },
    {
      quote: "Profil yönetimi ve içerik paylaşım fonksiyonları ile donatılmış modern sosyal medya platformu.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
      category: "Social Media",
      technologies: ["Next.js", "React", "MongoDB", "Real-time Updates"],
      features: ["User Profiles", "Content Sharing", "Real-time Feed", "Social Interactions"]
    },
    {
      quote: "Çocuklar için renkli ve davetkar tasarıma sahip, çeşitli aktiviteleri tanıtan eğlence merkezi web sitesi.",
      name: "Oyun Merkezi Web Sitesi",
      designation: "Oyun Merkezi",
      url: "https://gamecenter-website.vercel.app/",
      src: "/gamecenter-link.png",
      category: "Entertainment",
      technologies: ["Next.js", "React", "Tailwind CSS", "Interactive Design"],
      features: ["Activity Showcase", "Colorful Design", "Interactive Elements", "Child-friendly UI"]
    }
  ],
  en: [
    {
      quote: "Innovative platform enabling users to engage in real-time voice conversations with AI through scenario-based interactions.",
      name: "Syntalkic.",
      designation: "AI Conversation Platform",
      url: "https://syntalkic.vercel.app",
      src: "/syntalkic-link.png",
      category: "AI Platform",
      technologies: ["Next.js", "React", "AI Integration", "WebRTC"],
      features: ["Real-time AI Chat", "Voice Recognition", "Scenario-based Interactions", "Modern UI/UX"]
    },
    {
      quote: "Modern e-commerce platform featuring advanced admin dashboard for seamless shopping experience.",
      name: "Quest Store",
      designation: "e-commerce platform",
      url: "https://quest-store.vercel.app",
      src: "/queststore-link.png",
      category: "E-commerce",
      technologies: ["Next.js", "React", "Stripe", "Admin Panel"],
      features: ["Product Catalog", "Payment Processing", "Admin Dashboard", "User Management"]
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
      quote: "Property Quest is a user-friendly platform that connects renters with property owners.",
      name: "Property Quest",
      designation: "House Rental Platform",
      url: "https://property-quest-psi.vercel.app",
      src: "/propertyquest-link.png",
      category: "Real Estate",
      technologies: ["Next.js", "React", "MongoDB", "Map Integration"],
      features: ["Property Listings", "Search & Filter", "User Profiles", "Booking System"]
    },
    {
      quote: "Professional law firm website featuring expertise areas, blog content, and appointment booking system.",
      name: "Lawyer Prototype",
      designation: "Law Firm Website",
      url: "https://lawyer-prototype.vercel.app/",
      src: "/lawyer-link.png",
      category: "Professional Services",
      technologies: ["Next.js", "React", "Tailwind CSS", "Appointment System"],
      features: ["Expertise Areas", "Blog System", "Appointment Booking", "Contact Forms"]
    },
    {
      quote: "Modern design showcasing general and cosmetic dentistry services in a user-friendly dental clinic website.",
      name: "Dentist Website",
      designation: "Dental Clinic",
      url: "https://dentist-website-seven.vercel.app",
      src: "/dentist-link.png",
      category: "Healthcare",
      technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      features: ["Service Showcase", "Appointment Booking", "Modern Design", "Mobile Responsive"]
    },
    {
      quote: "Modern platform providing veterinary services in a warm and professional atmosphere that instills confidence in pet owners.",
      name: "Veterinary Website",
      designation: "Veterinary Clinic",
      url: "https://vet-reserve-website.vercel.app/",
      src: "/vet-link.png",
      category: "Healthcare",
      technologies: ["Next.js", "React", "Tailwind CSS", "Booking System"],
      features: ["Service Information", "Appointment Booking", "Pet Care Tips", "Professional Design"]
    },
    {
      quote: "Modern social media platform equipped with profile management and content sharing features.",
      name: "sosyalmedya.pro",
      designation: "Social Media App",
      url: "https://social-media-project-six.vercel.app",
      src: "/sosyalmedia-link.png",
      category: "Social Media",
      technologies: ["Next.js", "React", "MongoDB", "Real-time Updates"],
      features: ["User Profiles", "Content Sharing", "Real-time Feed", "Social Interactions"]
    },
    {
      quote: "Colorful and inviting design for children, featuring various activities in an entertainment center website.",
      name: "Game Center Website",
      designation: "Entertainment Center",
      url: "https://gamecenter-website.vercel.app/",
      src: "/gamecenter-link.png",
      category: "Entertainment",
      technologies: ["Next.js", "React", "Tailwind CSS", "Interactive Design"],
      features: ["Activity Showcase", "Colorful Design", "Interactive Elements", "Child-friendly UI"]
    }
  ]
};

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  // Testimonial data'dan projeleri al
  const projects = testimonialData[language] || testimonialData.tr;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 dark:bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-500/25 dark:bg-blue-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-500/18 dark:bg-indigo-400/28 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 dark:via-black/18 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="mb-6"
              variants={fadeInUp}
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t?.nav?.home || "Home"}
              </Link>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              {t?.projects?.title || "Our Projects"}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4"
              variants={fadeInUp}
            >
              {t?.projects?.subtitle || "Discover our portfolio of successful digital solutions"}
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {t?.projects?.description || "We've helped businesses across various industries achieve their digital goals. Here are some of our featured projects."}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.quote}
                </p>


                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t?.projects?.viewProject || "Projeyi İncele"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t?.services?.cta?.title || "Ready to bring your project to life?"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t?.services?.cta?.description || "Let's craft your digital success story together with our expert team. Contact us now for a free consultation."}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-lg"
            >
              {t?.services?.cta?.button || "Free Consultation"}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
