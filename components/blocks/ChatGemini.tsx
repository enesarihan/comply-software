import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

function shouldSuggestContact(text: string) {
  return /fiyat|teklif|iletişim|contact|price|quote|offer|information|bilgi/i.test(
    text
  );
}

export default function ChatGemini() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text:
        (t && t.chat && t.chat.welcome) ||
        "Merhaba! Ben Comply Bot. Size nasıl yardımcı olabilirim?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const notifRef = useRef<HTMLAudioElement | null>(null);
  const prevMsgCount = useRef(messages.length);

  // Açılışta üstte karşılama mesajı 10 saniye göster, kapatma tuşu ekle
  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Her yeni AI mesajında ses çal
  useEffect(() => {
    if (
      messages.length > prevMsgCount.current &&
      messages[messages.length - 1].from === "ai"
    ) {
      if (notifRef.current) notifRef.current.play();
    }
    prevMsgCount.current = messages.length;
  }, [messages]);

  // Her yeni mesajda otomatik aşağı kaydır
  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function scrollToContact() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // İletişim formuna yönlendirdikten sonra chat'i kapat
      setTimeout(() => setOpen(false), 500);
    }
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Bilinmeyen hata");
      setMessages((msgs) => [...msgs, { from: "ai", text: data.response }]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Bilinmeyen hata");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <audio ref={notifRef} src="/notify.mp3" preload="auto" />
      {/* Açılışta üstte karşılama mesajı */}
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-2 px-4 py-2 rounded-lg shadow-lg bg-blue-500 dark:bg-lime-500 text-white dark:text-neutral-900 font-semibold text-sm flex items-center justify-between w-full max-w-xs"
        >
          <span>
            {(t && t.chat && t.chat.welcome) ||
              "Merhaba! Nasıl yardımcı olabilirim?"}
          </span>
          <button
            onClick={() => setShowWelcome(false)}
            className="ml-2 text-white dark:text-neutral-900 hover:text-blue-200 dark:hover:text-lime-600 text-lg font-bold focus:outline-none"
            aria-label="Kapat"
          >
            ×
          </button>
        </motion.div>
      )}
      {/* WhatsApp animasyonu ile chat butonu */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="w-12 h-12 px-2 py-2 rounded-full shadow-lg border border-transparent text-white bg-blue-500 hover:bg-blue-600 dark:bg-lime-500 dark:hover:bg-lime-600 flex items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-lime-500 transition-colors duration-200 ease-in-out"
          aria-label="Comply Botu Aç"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">🤖</span>
        </motion.button>
      )}
      {open && (
        <div className="w-[95vw] max-w-sm md:max-w-md md:w-[380px] rounded-2xl shadow-2xl border border-blue-500 dark:border-lime-500 bg-white dark:bg-neutral-900 flex flex-col h-[70vh] animate-fadeIn">
          <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500 dark:border-lime-500 bg-blue-500 dark:bg-lime-500 text-white dark:text-neutral-900 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold border border-white/30">
                🤖
              </span>
              <span className="font-bold text-lg">
                {(t && t.chat && t.chat.botName) || "Comply Bot"}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white dark:text-neutral-900 hover:text-blue-200 dark:hover:text-lime-600 text-2xl font-bold px-2"
              aria-label="Kapat"
            >
              ×
            </button>
          </div>
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-white dark:bg-neutral-900"
            style={{ scrollbarWidth: "thin" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.from === "ai"
                    ? "bg-blue-50 text-blue-900 dark:bg-lime-200 dark:text-lime-900 self-start"
                    : "bg-blue-500 text-white dark:bg-lime-500 dark:text-neutral-900 self-end ml-auto"
                }`}
              >
                {msg.text}
                {msg.from === "ai" &&
                  i === messages.length - 1 &&
                  shouldSuggestContact(msg.text) && (
                    <button
                      className="block mt-2 text-xs bg-blue-100 text-blue-700 dark:bg-lime-300 dark:text-lime-900 px-3 py-1 rounded hover:bg-blue-200 dark:hover:bg-lime-400 transition"
                      onClick={scrollToContact}
                      type="button"
                    >
                      {(t && t.chat && t.chat.contactCta) ||
                        "Daha fazla bilgi almak için iletişim formunu aç"}
                    </button>
                  )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={sendMessage}
            className="flex gap-2 p-4 border-t border-blue-500 dark:border-lime-500 bg-white dark:bg-neutral-900"
          >
            <input
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-lime-500 transition bg-white dark:bg-neutral-800 text-black dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                (t && t.chat && t.chat.inputPlaceholder) || "Sorunuzu yazın..."
              }
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 dark:bg-lime-500 dark:hover:bg-lime-600 text-white dark:text-neutral-900 px-4 py-2 rounded font-bold disabled:opacity-50 transition"
              disabled={loading || !input.trim()}
            >
              {(t && t.chat && t.chat.send) || "Gönder"}
            </button>
          </form>
          {error && (
            <div className="text-red-500 text-xs px-4 pb-2">{error}</div>
          )}
        </div>
      )}
    </>
  );
}
