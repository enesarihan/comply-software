"use client";

import { useLanguage } from "@/contexts/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = {
  tr: [
    {
      question: "Web sitemin tasarımı ne kadar sürede tamamlanır?",
      answer:
        "Çoğu projede temel planlar için 1 hafta içinde teslim sağlıyoruz. Profesyonel ve Elite planlarda proje kapsamına göre süre değişebilir.",
    },
    {
      question: "Web sitem SEO uyumlu olacak mı?",
      answer:
        "Evet. SEO optimizasyonu her planda yer alıyor. Arama motorlarında görünürlüğünüzü artıracak şekilde kodlama yapıyoruz.",
    },
    {
      question: "Hosting ve domain hizmetlerini siz mi sağlıyorsunuz?",
      answer:
        "Evet. Profesyonel planda 1 yıl, Elite planda ise 2 yıl ücretsiz hosting ve domain hizmeti sunuyoruz.",
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer:
        "Next.js, React, Tailwind CSS, n8n, Firebase ve Supabase gibi modern teknolojileri kullanıyoruz.",
    },
    {
      question: "Admin panel ve içerik yönetimi var mı?",
      answer:
        "Elite planla birlikte gelişmiş bir admin paneli sunuyoruz. İçeriğinizi dilediğiniz gibi yönetebilirsiniz.",
    },
    {
      question: "Projemi başlatmak için hangi bilgilere ihtiyacınız var?",
      answer:
        "İhtiyaçlarınızı anlayabilmemiz için hedef kitleniz, içerikleriniz ve varsa örnek siteler yeterli olacaktır. İlk görüşmede detaylıca not alıyoruz.",
    },
    {
      question: "Mobil uyumlu (responsive) tasarım sağlıyor musunuz?",
      answer:
        "Kesinlikle. Tüm planlarda mobil cihazlara %100 uyumlu tasarımlar sunuyoruz.",
    },
    {
      question: "Yayın sonrası destek veriyor musunuz?",
      answer:
        "Evet. Her planda temel teknik destek yer alıyor. Elite plan kullanıcıları için öncelikli destek sağlıyoruz.",
    },
    {
      question: "Web sitemi daha sonra güncelleyebilir miyim?",
      answer:
        "Evet. Dilerseniz sizin için bakım planları sunuyoruz ya da içerik yönetim paneliyle kendiniz kolayca güncelleme yapabilirsiniz.",
    },
  ],
  en: [
    {
      question: "How long does it take to deliver my website?",
      answer:
        "Most basic plans are delivered within one week. Timelines for Professional and Elite plans depend on project scope.",
    },
    {
      question: "Will my website be SEO optimized?",
      answer:
        "Yes. SEO optimization is included in our all plans. We code with visibility in mind.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes. We provide 1 year of free hosting and domain with the Professional plan, and 2 years with the Elite plan.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies like Next.js, React, Tailwind CSS, n8n, Firebase, and Supabase.",
    },
    {
      question: "Is there an admin panel for content management?",
      answer:
        "Yes. With the Elite plan, we provide a powerful admin panel so you can manage your content easily.",
    },
    {
      question: "What information do you need to start my project?",
      answer:
        "We typically need your business goals, preferred design examples, and basic content. We'll go over the rest in our first call.",
    },
    {
      question: "Will my site be mobile-friendly?",
      answer:
        "Absolutely. All our plans include fully responsive designs that work great on all screen sizes.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes. All plans include basic post-launch support. Elite plan clients receive priority assistance.",
    },
    {
      question: "Can I update my website later?",
      answer:
        "Yes. You can either use the admin panel to make updates or we can provide maintenance packages.",
    },
  ],
};

export default function FaqSection() {
  const { language } = useLanguage();
  const content = faqData[language];

  return (
    <section 
      id="faq" 
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Mesh Gradient Background - matching Hero */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.8) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.8) 100%)",
        }}
      >
        {/* Light mode gradient */}
        <div 
          className="absolute inset-0 block dark:hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.18) 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.22) 0%, transparent 50%),
              radial-gradient(circle at 80% 90%, rgba(251, 191, 36, 0.18) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(59, 130, 246, 0.12) 0%,
                rgba(139, 92, 246, 0.12) 25%,
                rgba(34, 197, 94, 0.1) 50%,
                rgba(236, 72, 153, 0.12) 75%,
                rgba(251, 191, 36, 0.1) 100%)
            `
          }}
        />
        
        {/* Dark mode gradient */}
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.35) 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 90%, rgba(251, 191, 36, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(6, 182, 212, 0.15) 0%,
                rgba(139, 92, 246, 0.15) 25%,
                rgba(34, 197, 94, 0.12) 50%,
                rgba(236, 72, 153, 0.15) 75%,
                rgba(251, 191, 36, 0.12) 100%)
            `
          }}
        />
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(-45deg, 
                rgba(59, 130, 246, 0.08),
                rgba(139, 92, 246, 0.08),
                rgba(34, 197, 94, 0.06),
                rgba(236, 72, 153, 0.08))
            `,
            backgroundSize: "400% 400%",
            animation: "gradientShift 20s ease infinite"
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        {/* Primary glow - top center */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/15 dark:bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary glow - bottom left */}
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-purple-500/12 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Tertiary glow - right */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-400/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-6"
          >
            {language === "tr"
              ? "Sıkça Sorulan Sorular"
              : "Frequently Asked Questions"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === "tr"
              ? "Projelerimiz hakkında merak ettiğiniz soruların cevapları burada"
              : "Find answers to commonly asked questions about our services"}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {content.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="relative overflow-hidden rounded-2xl group"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    WebkitBackdropFilter: "blur(20px) saturate(150%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Liquid highlight effect */}
                  <span 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)"
                    }}
                  />
                  
                  {/* Subtle noise for glass texture */}
                  <span 
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "3px 3px"
                    }}
                  />

                  <AccordionTrigger className="relative z-10 text-lg font-semibold px-8 py-6 text-foreground hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 group-hover:bg-transparent [&[data-state=open]]:text-blue-600 dark:[&[data-state=open]]:text-cyan-400">
                    <span className="text-left leading-relaxed">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="relative z-10 px-8 pb-6 pt-0 text-muted-foreground leading-relaxed">
                    <div className="pt-2 border-t border-white/10">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
}
