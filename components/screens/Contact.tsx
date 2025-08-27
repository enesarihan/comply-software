// components/ContactSection.tsx (veya nerede kullanıyorsanız)
"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
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
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const { t } = useLanguage();

  // Form verilerini tutmak için state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = t.contact.form.errors.firstNameRequired;
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = t.contact.form.errors.firstNameMinLength;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = t.contact.form.errors.lastNameRequired;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = t.contact.form.errors.lastNameMinLength;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.form.errors.phoneRequired;
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = t.contact.form.errors.phoneInvalid;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.form.errors.messageMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t.contact.form.errors.formInvalid);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || t.contact.form.success);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
          phone: "",
        });
        setErrors({});
      } else {
        toast.error(data.message || t.contact.form.errors.submitError);
      }
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
      toast.error(t.contact.form.errors.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-lime-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {/* Primary glow - top left orange (Technologies'ten devam) */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-orange-500/20 dark:bg-orange-400/30 rounded-full blur-3xl"></div>
        
        {/* Secondary glow - bottom right blue */}
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-blue-500/25 dark:bg-blue-400/35 rounded-full blur-3xl"></div>
        
        {/* Tertiary glow - center purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/22 dark:bg-purple-400/32 rounded-full blur-3xl"></div>
        
        {/* Moving glow - bottom left */}
        <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-indigo-500/15 dark:bg-indigo-400/25 rounded-full blur-3xl animate-bounce opacity-60"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                {t.contact.info.title}
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Liquid highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-xl"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                      mask: "radial-gradient(80px 30px at 10% 0%, black 30%, transparent 60%)",
                      WebkitMask: "radial-gradient(80px 30px at 10% 0%, black 30%, transparent 60%)"
                    }}
                  />
                  {/* Gloss sweep on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-1/4 translate-x-[-150%] rotate-12 bg-white/20 blur-sm transition-transform duration-500 group-hover:translate-x-[400%]"
                  />
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 shadow-lg relative z-10">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {t.contact.info.email.label}
                    </p>
                    <Link
                      href={"mailto:complysoftware@gmail.com"}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      {t.contact.info.email.value}
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {t.contact.info.phone.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t.contact.info.phone.value}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {t.contact.info.address.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t.contact.info.address.value}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <Link
                    href={"https://www.linkedin.com/company/comply-software"}
                    aria-label="LinkedIn sayfamızı ziyaret edin"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 transition-colors min-h-[48px] min-w-[48px]"
                  >
                    <BsLinkedin className="h-6 w-6 text-white" />
                  </Link>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      LinkedIn
                    </p>
                    <Link
                      href={"https://www.linkedin.com/company/comply-software"}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      @comply-software
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <Link 
                    href={"https://www.instagram.com/complysoftware"}
                    aria-label="Instagram sayfamızı ziyaret edin"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-lg hover:shadow-lg hover:scale-105 transition-all min-h-[48px] min-w-[48px]"
                  >
                    <FaInstagram className="h-6 w-6 text-white" />
                  </Link>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Instagram
                    </p>
                    <Link
                      href={"https://www.instagram.com/complysoftware"}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all duration-300"
                    >
                      @complysoftware
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card 
              className="p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(150px 60px at 15% 10%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(150px 60px at 15% 10%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-8"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "4px 4px"
                }}
              />
              <CardHeader className="px-0 pt-0 pb-6 relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {t.contact.form.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                  {t.contact.form.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0 relative z-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {t.contact.form.firstName}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`h-12 transition-all duration-200 ${
                          errors.firstName
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {t.contact.form.lastName}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`h-12 transition-all duration-200 ${
                          errors.lastName
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {t.contact.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`h-12 transition-all duration-200 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {t.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+90 (537) 728 54 64"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 transition-all duration-200 ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {t.contact.form.company}
                    </Label>
                    <Input
                      id="company"
                      placeholder={t.contact.form.companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {t.contact.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`transition-all duration-200 resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <LiquidButton
                    type="submit"
                    className="w-full text-blue-600 font-bold text-lg group"
                    size="xl"
                    disabled={loading}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          {t.contact.form.send}
                        </>
                      )}
                    </span>
                  </LiquidButton>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
