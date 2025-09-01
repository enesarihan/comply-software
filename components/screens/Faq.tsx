"use client";

import { useLanguage } from "@/contexts/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { memo } from "react";

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

// Memoized FAQ Item Component for better performance
const FaqItem = memo(({ faq, index }: { faq: { question: string; answer: string }, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <AccordionItem
      value={`faq-${index}`}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm hover:bg-white/8 dark:hover:bg-white/8 transition-all duration-300"
    >
      <AccordionTrigger className="text-lg font-semibold px-6 py-4 text-foreground hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300">
        <span className="text-left leading-relaxed">{faq.question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground leading-relaxed">
        <div className="pt-2 border-t border-white/10">
          {faq.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  </motion.div>
));

FaqItem.displayName = 'FaqItem';

export default function FaqSection() {
  const { language } = useLanguage();
  const content = faqData[language];

  return (
    <section 
      id="faq" 
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 dark:from-cyan-500/10 dark:via-purple-500/10 dark:to-emerald-500/10" />
      
      {/* Single optimized glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-60" />

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
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {content.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
}
