// components/Footer.jsx
import Image from "next/image"; // next/image'ı import ediyoruz
import Link from "next/link"; // next/link'i import ediyoruz
import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "next-themes";

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const navItems = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.contact, href: "#contact" },
    { name: t.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="py-12 px-4 border-t bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          {/* Logo ve Telif Hakkı */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/">
              <Image
                src={`${theme === "dark" ? "/logo.png" : "/logo-white.png"}`} // Public klasöründeki logo.png
                alt="Company Logo"
                width={150}
                height={40}
                priority
                className="rounded-lg"
                suppressHydrationWarning
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
          </div>

          {/* Navigasyon Linkleri */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t.footer.quickLinks}
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* İletişim Bilgileri (İsteğe Bağlı - Geliştirilebilir) */}
          {/* Bu kısmı isterseniz e-posta, telefon veya adres gibi bilgilerle doldurabilirsiniz */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t.footer.contactUs}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t.footer.email}: complysoftware@gmail.com
            </p>
            <p className="text-muted-foreground text-sm">
              {t.footer.phone}: +90 (552) 584-5941
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
