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
    <section id="contact" className="relative py-24 px-4">
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 shadow-lg">
                    <Link
                      href={"https://www.linkedin.com/company/comply-software"}
                    >
                      <BsLinkedin className="h-6 w-6 text-white" />
                    </Link>
                  </div>
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-lg">
                    <Link href={"https://www.instagram.com/complysoftware"}>
                      <FaInstagram className="h-6 w-6 text-white" />
                    </Link>
                  </div>
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
            <Card className="p-8 border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader className="px-0 pt-0 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {t.contact.form.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                  {t.contact.form.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
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
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 border-0 rounded-xl relative overflow-hidden group"
                    disabled={loading}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
