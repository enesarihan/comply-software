// contexts/language-context.tsx
"use client"; // Bu dosya istemci tarafında kullanılacak, bu yüzden "use client" direktifi burada kalmalı.

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
// translations objesini ve Language tipini yeni ve ayrı dosyamızdan import ediyoruz
import { translations, type Language } from "@/contexts/translations"; // Yolun doğru olduğundan emin ol

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // `t` prop'unun tipini `translations.en`'in yapısıyla eşleştiriyoruz.
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr"); // Varsayılan dil olarak 'tr' ayarlandı

  useEffect(() => {
    // Tarayıcı tarafında çalışacak.
    const savedLanguage = localStorage.getItem("language") as Language;
    // localStorage'da kayıtlı dil varsa ve geçerliyse onu kullan, yoksa varsayılan 'tr' kalır.
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // Seçilen dili localStorage'a kaydet
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language], // Context'teki `t` değeri, seçilen dile göre çevirileri sunar.
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Context'in provider'ı ile sarılmadığında hata fırlatır.
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
