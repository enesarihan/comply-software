import { cn } from "@/lib/utils";
import { Bai_Jamjuree } from "next/font/google";

interface LogoProps {
  className: string;
  type?: "full" | "single";
}

const bai = Bai_Jamjuree({ weight: "600", subsets: ["latin"] });

const Logo = ({ className, type }: LogoProps) => {
  if (type === "full") {
    return (
      <div className="flex flex-row gap-1">
        <h2 className={cn(bai.className, className)}>Comply Software</h2>
      </div>
    );
  } else {
    return <p className={cn(bai.className, className)}>CS</p>;
  }
};

export default Logo;
