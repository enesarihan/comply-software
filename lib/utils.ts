import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { translations } from "@/contexts/translations";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function detectLanguage(text: string): "tr" | "en" {
  // Basit bir Türkçe karakter kontrolü ile dil tespiti
  return /[çğıöşüÇĞİÖŞÜ]/.test(text) ? "tr" : "en";
}

function getPackageInfo(lang: "tr" | "en") {
  const plans = translations[lang].pricing.plans;
  return Object.values(plans)
    .map(
      (plan) =>
        `- ${plan.name}: ${
          plan.description
        }\n  Özellikler/Features: ${plan.features.join(", ")}`
    )
    .join("\n\n");
}

function getFaqExamples(lang: "tr" | "en") {
  const faqs = translations[lang].faq.questions;
  return faqs
    .map((q) => `Soru: ${q.question}\nCevap: ${q.answer}`)
    .join("\n\n");
}

export async function askGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Gemini API anahtarı tanımlı değil.");

  const lang = detectLanguage(prompt);
  const siteInfo = JSON.stringify(translations[lang]);
  const packageInfo = getPackageInfo(lang);
  const faqExamples = getFaqExamples(lang);
  const priceNote =
    lang === "tr"
      ? "Fiyat bilgisi translations verisinde yoksa, 'Fiyatlarımız için lütfen iletişime geçin.' şeklinde cevap ver."
      : "If price information is not available in the data, reply: 'Please contact us for our prices.'";
  const systemMessage =
    lang === "tr"
      ? `Sen Comply Software'ın müşteri temsilcisi bir yapay zekasısın. Kullanıcıdan gelen soruları sadece aşağıdaki site bilgilerine göre, kısa, ikna edici ve yardımsever bir dille, TÜRKÇE olarak yanıtla. Türkçe soruya asla İngilizce cevap verme. Bilmediğin veya sitede olmayan bir bilgi sorulursa, 'Bu konuda yardımcı olamıyorum.' de.\n\nCevaplarında müşteriyi ikna etmeye, güven vermeye ve iletişim formuna yönlendirmeye özen göster.\n\nPaketler:\n${packageInfo}\n\nSSS Örnekleri:\n${faqExamples}\n\n${priceNote}\n\nSite Bilgileri: `
      : `You are an AI customer representative for Comply Software. Answer user questions only based on the site information below, concisely, persuasively, and in a friendly/helpful tone, IN ENGLISH. Never reply in Turkish to an English question. If you don't know the answer or it's not on the site, reply: 'I'm unable to help with that.'\n\nTry to convince the customer, build trust, and encourage them to use the contact form for more details.\n\nPackages:\n${packageInfo}\n\nFAQ Examples:\n${faqExamples}\n\n${priceNote}\n\nSite Information: `;

  const fullPrompt = `${systemMessage}${siteInfo}\n\nKullanıcı/User: ${prompt}\nYanıt/Answer:`;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
  const result = await model.generateContent(fullPrompt);
  return result.response.text();
}
