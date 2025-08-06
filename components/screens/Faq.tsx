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
    <section id="faq" className="max-w-3xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-foreground mb-8"
      >
        {language === "tr"
          ? "Sıkça Sorulan Sorular"
          : "Frequently Asked Questions"}
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-4">
        {content.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border border-border rounded-2xl bg-muted"
          >
            <AccordionTrigger className="text-base font-medium px-5 py-4 text-foreground hover:bg-muted/70 transition flex items-center justify-between">
              <span>{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
