// components/ContactSection.tsx (veya nerede kullanıyorsanız)
"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context"; // Dil bağlamınızın yolu doğru olmalı
import Link from "next/link";
import { useState } from "react"; // React state hook'u
import { toast } from "sonner"; // Sonner bildirim kütüphanesi

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Form verisi için tip tanımlaması
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const { t } = useLanguage(); // Dil bağlamınızdan çeviri fonksiyonunu al

  // Form verilerini tutmak için state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  // Form gönderilirken yüklenme durumunu takip etmek için state
  const [loading, setLoading] = useState<boolean>(false);

  // Input alanları değiştiğinde state'i güncelle
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Varsayılan form gönderme işlemini engelle
    setLoading(true); // Yükleme durumunu başlat

    try {
      // API rotasına POST isteği gönder
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Form verilerini JSON formatında gönder
      });

      const data = await response.json(); // API'den gelen yanıtı al

      if (response.ok) {
        // Başarılıysa toast bildirimi göster ve formu sıfırla
        toast.success(data.message || "Mesajınız başarıyla gönderildi!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        // Hata varsa toast bildirimi göster
        toast.error(data.message || "Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      // Ağ veya beklenmedik bir hata olursa
      console.error("Mesaj gönderme hatası:", error);
      toast.error("Beklenmedik bir hata oluştu.");
    } finally {
      setLoading(false); // Yükleme durumunu bitir
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold">
                      {t.contact.info.email.label}
                    </p>
                    <Link
                      href={"mailto:complysoftware@gmail.com"}
                      className="text-muted-foreground"
                    >
                      {t.contact.info.email.value}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold">
                      {t.contact.info.phone.label}
                    </p>
                    <p className="text-muted-foreground">
                      {t.contact.info.phone.value}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold">
                      {t.contact.info.address.label}
                    </p>
                    <p className="text-muted-foreground">
                      {t.contact.info.address.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>{t.contact.form.title}</CardTitle>
                <CardDescription>{t.contact.form.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                {/* Formun onSubmit olayını handleSubmit fonksiyonuna bağla */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {t.contact.form.firstName}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName} // State'ten değeri al
                        onChange={handleChange} // Değişiklikleri handle et
                        required // Alanın doldurulmasını zorunlu kıl
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {t.contact.form.lastName}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.contact.form.company}</Label>
                    <Input
                      id="company"
                      placeholder={t.contact.form.companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Gönderiliyor..." : t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
