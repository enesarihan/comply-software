import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { translations } from "@/contexts/translations";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function detectLanguage(text: string): "tr" | "en" {
  // Türkçe karakterler ve yaygın Türkçe kelimeler
  const turkishPatterns = [
    /[çğıöşüÇĞİÖŞÜ]/, // Türkçe karakterler
    /\b(merhaba|nasılsın|teşekkür|evet|hayır|ve|ile|bu|şu|o|ben|sen|o|biz|siz|onlar)\b/i, // Yaygın Türkçe kelimeler
    /\b(fiyat|teklif|iletişim|bilgi|hakkında|nasıl|ne|kim|nerede|ne zaman|neden)\b/i, // Sık kullanılan Türkçe kelimeler
  ];

  // İngilizce yaygın kelimeler
  const englishPatterns = [
    /\b(hello|hi|how|what|when|where|why|who|which|price|contact|information|about|help|can|will|would|could|should)\b/i,
  ];

  // Türkçe pattern'ları kontrol et
  const turkishMatches = turkishPatterns.filter((pattern) =>
    pattern.test(text)
  ).length;
  const englishMatches = englishPatterns.filter((pattern) =>
    pattern.test(text)
  ).length;

  // Eğer Türkçe karakter veya kelime varsa Türkçe kabul et
  if (turkishMatches > 0) {
    return "tr";
  }

  // Eğer sadece İngilizce kelimeler varsa İngilizce kabul et
  if (englishMatches > 0) {
    return "en";
  }

  // Varsayılan olarak Türkçe (site Türkçe ağırlıklı)
  return "tr";
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
      ? `Sen Comply Software'ın müşteri temsilcisi bir yapay zekasısın. 

DİL KURALI: Kullanıcı TÜRKÇE yazdıysa, kesinlikle TÜRKÇE cevap ver. Asla İngilizce cevap verme.

Kullanıcıdan gelen soruları aşağıdaki site bilgilerine göre, kısa, ikna edici ve yardımsever bir dille, TÜRKÇE olarak yanıtla.

ÖNEMLİ KURALLAR:
1. Mümkün olduğunca yardımcı olmaya çalış, "Bu konuda yardımcı olamıyorum" demekten kaçın
2. Bilmediğin konularda bile genel bilgi ver ve iletişime yönlendir
3. Cevaplarında müşteriyi ikna etmeye, güven vermeye ve iletişim formuna yönlendirmeye özen göster
4. Kısa ve öz cevaplar ver, uzun açıklamalardan kaçın
5. Her zaman profesyonel ve dostane bir ton kullan
6. ASLA "I'm sorry, I only speak English" gibi mesajlar verme
7. Kullanıcının dilini algıla ve aynı dilde cevap ver

Paketler:
${packageInfo}

SSS Örnekleri:
${faqExamples}

${priceNote}

Site Bilgileri: `
      : `You are an AI customer representative for Comply Software. 

LANGUAGE RULE: If the user wrote in ENGLISH, respond in ENGLISH. If the user wrote in TURKISH, respond in TURKISH. Always match the user's language.

Answer user questions based on the site information below, concisely, persuasively, and in a friendly/helpful tone.

IMPORTANT RULES:
1. Try to be as helpful as possible, avoid saying "I'm unable to help with that"
2. Even for topics you don't know, provide general information and direct to contact
3. Try to convince the customer, build trust, and encourage them to use the contact form for more details
4. Give short and concise answers, avoid long explanations
5. Always use a professional and friendly tone
6. NEVER say "I'm sorry, I only speak English" or similar messages
7. Detect the user's language and respond in the same language

Packages:
${packageInfo}

FAQ Examples:
${faqExamples}

${priceNote}

Site Information: `;

  const fullPrompt = `${systemMessage}${siteInfo}

Kullanıcı/User: ${prompt}

DİL TALİMATI/LANGUAGE INSTRUCTION: ${
    lang === "tr"
      ? "Kullanıcı Türkçe yazdı, TÜRKÇE cevap ver."
      : "User wrote in English, respond in ENGLISH."
  }

Yanıt/Answer:`;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
  const result = await model.generateContent(fullPrompt);
  return result.response.text();
}
