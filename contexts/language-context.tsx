// contexts/language-context.tsx
"use client"; // Bu dosya istemci tarafında kullanılacak, bu yüzden "use client" direktifi burada kalmalı.

import type React from "react";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
// Performans için optimized translation import
import { getTranslation, type Language } from "@/contexts/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Performans için strict typing kısıtlamadık
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr"); // Varsayılan dil olarak 'tr' ayarlandı

  useEffect(() => {
    // Client-side only localStorage kontrolü
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang);
    }
  };

  // Memoized translations - sadece dil değiştiğinde yeniden hesaplansın
  const translations = useMemo(() => {
    return getTranslation(language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage: handleSetLanguage,
    t: translations,
  }), [language, translations]);

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
