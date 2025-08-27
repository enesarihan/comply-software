import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useLanguage } from "@/contexts/language-context";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function GetStartedButton() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleClick = () => {
    router.push("#contact");
  };
  return (
    <LiquidButton
      className="group relative overflow-hidden text-blue-600 dark:text-white font-semibold"
      size="lg"
      onClick={handleClick}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {t.nav.getStarted}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-blue-600/15 dark:bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-blue-600 dark:text-white">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </LiquidButton>
  );
}
