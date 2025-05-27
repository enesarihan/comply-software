import { useLanguage } from "@/contexts/language-context";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
